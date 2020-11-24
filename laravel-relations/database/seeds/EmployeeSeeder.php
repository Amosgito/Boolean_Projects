<?php

use Illuminate\Database\Seeder;
use App\Location;
use App\Employee;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Employee::class, 50)
            -> make()
            ->each(function ($emp) {

                $loc = Location::inRandomOrder() -> first();
                $emp -> location() -> associate($loc);
                $emp -> save();
            });
    }
}
