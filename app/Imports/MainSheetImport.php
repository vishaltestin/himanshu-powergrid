<?php

namespace App\Imports;

use App\Models\AllowedUdiseCode;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;

class MainSheetImport implements ToCollection, WithHeadingRow, WithChunkReading, SkipsEmptyRows
{
    public function collection(Collection $rows)
    {
        // Extends PHP execution time to 5 minutes to completely prevent maximum timeout errors
        ini_set('max_execution_time', 300);

        $data = [];

        foreach ($rows as $row) {
            // Flexible column header mapping (handles different client header names & formatting)
            $udiseCode = trim($row['udise_code'] ?? $row['udise'] ?? $row['code'] ?? '');
            $schoolName = trim($row['school_name'] ?? $row['school'] ?? $row['name'] ?? '');
            $district = trim($row['district'] ?? $row['city'] ?? '');

            // Ensure UDISE code is exactly 11 digits
            if (strlen($udiseCode) !== 11) {
                continue;
            }

            $data[] = [
                'udise_code' => $udiseCode,
                'school_name' => $schoolName,
                'district' => $district ?: null,
                'status' => 1,
                'is_used' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        // Efficient batch insertion that automatically ignores database duplicates without crashing
        if (!empty($data)) {
            AllowedUdiseCode::insertOrIgnore($data);
        }
    }

    public function chunkSize(): int
    {
        return 500; // Processes rows in safe chunks to optimize memory and execution time
    }
}