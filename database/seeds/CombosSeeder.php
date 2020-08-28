<?php

use Illuminate\Database\Seeder;
use App\Models\Catalogue;

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
        
        //FraquencyOfActivity
        factory(App\Models\Catalogue::class)->create([
            'code' => '1',
            'name' => 'Frecuencia de actividades',
            'type' => 'fraquency_Activity',
            'state_id' => 1,
        ]);
        //AssignedLine
        factory(App\Models\Catalogue::class)->create([
            'code' => '1',
            'name' => 'Gestion de Integracion del Proyecto',//Linea Asignada
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '2',
            'name' => 'Gestion del Alcance del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '3',
            'name' => 'Gestion de Tiempo del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '4',
            'name' => 'Gestion de Costo del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '5',
            'name' => 'Gestion de la Calidad del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '6',
            'name' => 'Gestion RRHH del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '7',
            'name' => 'Gestion de Comunicaciones del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '8',
            'name' => 'Gestion de Riesgos del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);

        factory(App\Models\Catalogue::class)->create([
            'code' => '9',
            'name' => 'Gestion de Adquisiones del Proyecto',
            'type' => 'assigned_line',
            'state_id' => 1,
        ]);
        //aims_types
        factory(App\Models\Catalogue::class)->create([
            'code' => '1',
            'name' => 'Objetivo especifico',
            'type' => 'aims_types',
            'state_id' => 1,
        ]);
        factory(App\Models\Catalogue::class)->create([
            'code' => '2',
            'name' => 'Resultado',
            'type' => 'aims_types',
            'state_id' => 1,
        ]);
        //MeansOfVerification
        
        factory(App\Models\Catalogue::class)->create([
            'code' => '1',
            'name' => 'medios de verificacion',
            'type' => 'Means_Verification',
            'state_id' => 1,
        ]);

        //LinkageAxes
        DB::table('linkage_axes')->insert([
        
            'details'=>'ejesde vinculacion',
        ]);

        //BondingActivities
        DB::table('bonding_activities')->insert([
            'details'=>'Actividades de vinculacion',
        ]);
        //Institute
        DB::table('institutions')->insert([
            'code'=>'B1',
            'name'=>"Instituto Benito Juarez",
            'slogan'=>"blablablbaa",
            'state_id'=>1,
        ]);
        //research_areas
        DB::table('research_areas')->insert([
            'details'=>'area de investigacion',
        ]);
        //Career
        $modalidad=Catalogue::where( "name", "DUAL")->first();
        DB::table('careers')->insert([
            'institution_id'=>1,
            'code'=>'c12',
            'name'=>'desarrollo de software',
            'description'=>'assdadasdljafhjkasn',
            'modality_id'=>$modalidad->id,
            'resolution_number'=>'dsaasdadsadsf', 
            'title'=>'asdasffdsadsf',
            'acronym'=>'desarrollo',
            'type_id'=>1,
            'state_id'=>1,
            
        ]);

/*
en caso de mas datos 
INSERT INTO periodo_lectivos (id, created_at, updated_at, codigo, nombre, fecha_inicio_periodo, fecha_fin_periodo, fecha_inicio_cupo, fecha_fin_cupo, fecha_inicio_ordinaria, fecha_fin_ordinaria, fecha_inicio_extraordinaria, fecha_fin_extraordinaria, fecha_inicio_especial, fecha_fin_especial, estado) VALUES (3, NULL, NULL, '2018-1', 'MAYO 2018 - OCTUBRE 2018', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', '2018-05-01', '2018-10-30', 'ACTIVO');
INSERT INTO periodo_lectivos (id, created_at, updated_at, codigo, nombre, fecha_inicio_periodo, fecha_fin_periodo, fecha_inicio_cupo, fecha_fin_cupo, fecha_inicio_ordinaria, fecha_fin_ordinaria, fecha_inicio_extraordinaria, fecha_fin_extraordinaria, fecha_inicio_especial, fecha_fin_especial, estado) VALUES (4, NULL, NULL, '2018-2', 'NOVIEMBRE 2018 - ABRIL 2019', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', '2018-11-06', '2019-04-15', 'ACTIVO');
 INSERT INTO periodo_lectivos (id, created_at, updated_at, codigo, nombre, fecha_inicio_periodo, fecha_fin_periodo, fecha_inicio_cupo, fecha_fin_cupo, fecha_inicio_ordinaria, fecha_fin_ordinaria, fecha_inicio_extraordinaria, fecha_fin_extraordinaria, fecha_inicio_especial, fecha_fin_especial, estado) VALUES (5, NULL, NULL, '2019-1', 'MAYO 2019 - OCTUBRE 2019', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', '2018-05-27', '2019-10-30', 'ACTUAL');
 */        

    }
}
