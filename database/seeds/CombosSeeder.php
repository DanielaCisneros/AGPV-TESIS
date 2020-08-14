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
            'codigo'=>'2017-1', 
            'nombre'=>'MAYO 2017 - OCTUBRE 2017', 
            'fecha_inicio_periodo'=>'2017-05-01',
            'fecha_fin_periodo'=>'2018-10-31', 
            'fecha_inicio_cupo'=>'2017-05-01', 
            'fecha_fin_cupo'=>'2018-10-31', 
            'fecha_inicio_ordinaria'=>'2017-05-01', 
            'fecha_fin_ordinaria'=> '2018-10-31', 
            'fecha_inicio_extraordinaria'=>'2017-05-01', 
            'fecha_fin_extraordinaria'=>'2018-10-31', 
            'fecha_inicio_especial'=>'2017-05-01', 
            'fecha_fin_especial'=>'2018-10-31',
            'estado'=>'Activo'
        ]); 
        DB::table('academi_periods')->insert([
            'codigo'=>'2017-2', 
            'nombre'=>'NOVIEMBRE 2017 - ABRIL 2018', 
            'fecha_inicio_periodo'=>'2017-11-01',
            'fecha_fin_periodo'=>'2018-04-30', 

            'fecha_inicio_cupo'=>'2017-11-01', 

            'fecha_fin_cupo'=>'2018-04-30', 

            'fecha_inicio_ordinaria'=>'2017-11-01', 
            'fecha_fin_ordinaria'=> '2018-10-31', 

            'fecha_inicio_extraordinaria'=>'2018-04-30', 
            'fecha_fin_extraordinaria'=>'2017-11-01', 
            'fecha_inicio_especial'=>'2018-04-30', 
            'fecha_fin_especial'=>'2018-10-31',
            'estado'=>'ACTIVO'

        ]);

/*
en caso de mas datos 
INSERT INTO periodo_lectivos (id, created_at, updated_at, codigo, nombre, fecha_inicio_periodo, fecha_fin_periodo, fecha_inicio_cupo, fecha_fin_cupo, fecha_inicio_ordinaria, fecha_fin_ordinaria, fecha_inicio_extraordinaria, fecha_fin_extraordinaria, fecha_inicio_especial, fecha_fin_especial, estado) VALUES (3, NULL, NULL, '2018-1', 'MAYO 2018 - OCTUBRE 2018', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', 'ACTIVO');
INSERT INTO periodo_lectivos (id, created_at, updated_at, codigo, nombre, fecha_inicio_periodo, fecha_fin_periodo, fecha_inicio_cupo, fecha_fin_cupo, fecha_inicio_ordinaria, fecha_fin_ordinaria, fecha_inicio_extraordinaria, fecha_fin_extraordinaria, fecha_inicio_especial, fecha_fin_especial, estado) VALUES (4, NULL, NULL, '2018-2', 'NOVIEMBRE 2018 - ABRIL 2019', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', 'ACTIVO');
 INSERT INTO periodo_lectivos (id, created_at, updated_at, codigo, nombre, fecha_inicio_periodo, fecha_fin_periodo, fecha_inicio_cupo, fecha_fin_cupo, fecha_inicio_ordinaria, fecha_fin_ordinaria, fecha_inicio_extraordinaria, fecha_fin_extraordinaria, fecha_inicio_especial, fecha_fin_especial, estado) VALUES (5, NULL, NULL, '2019-1', 'MAYO 2019 - OCTUBRE 2019', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', 'ACTUAL');
 */        

    }
}
