<?php

use Illuminate\Database\Seeder;
use App\Employee;
use App\Task;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Task::class, 100)
            -> create()
            -> each(function($tas) {

                $emps = Employee::inRandomOrder()
                        -> take(rand(5, 10))
                        -> get();
                $tas -> employees() -> attach($emps);
            });
    }
}
