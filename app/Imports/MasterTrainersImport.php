<?php

namespace App\Imports;

use App\Models\MasterTrainer;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class MasterTrainersImport implements ToCollection, WithChunkReading, WithHeadingRow
{
    public function collection(Collection $rows)
    {
        $data = [];

        foreach ($rows as $row) {
            $name = trim($row['master_trainer_name'] ?? '');

            if (empty($name)) {
                continue;
            }

            $data[] = [
                'district'       => trim($row['district'] ?? ''),
                'name'           => $name,
                'school_name'    => trim($row['eco_club_school_name'] ?? ''),
                'contact_number' => trim($row['contact_number'] ?? ''),
                'email'          => trim($row['email_id'] ?? ''),
                'created_at'     => now(),
                'updated_at'     => now(),
            ];
        }

        MasterTrainer::insert($data);
    }

    public function chunkSize(): int
    {
        return 1000;
    }
}