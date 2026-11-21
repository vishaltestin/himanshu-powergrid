<?php

namespace App\Imports;

use App\Models\AllowedUdiseCode;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class UdiseCodesImport implements ToCollection, WithChunkReading, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        $data = [];

        foreach ($rows as $row) {
            $district   = trim($row['district'] ?? '');
            $schoolName = trim($row['eco_club_school_name'] ?? '');
            $udiseCode  = trim($row['udise_code'] ?? '');

            if (empty($udiseCode)) {
                continue;
            }

            $data[] = [
                'udise_code'  => (string) $udiseCode,
                'school_name' => $schoolName,
                'district'    => $district,
                'status'      => 1,
                'is_used'     => 0,
                'created_at'  => now(),
                'updated_at'  => now(),
            ];
        }

        AllowedUdiseCode::insertOrIgnore($data);
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}