<?php

use Illuminate\Database\Seeder;

class CombosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('academi_periods')->insert([
            'details'=> 'Mayo-octubre',
            'year'=>'2020',
        ]); 
        DB::table('academi_periods')->insert([
            'details'=> 'Octubre-Abril',
            'year'=>'2021',
        ]); 
    }
}
