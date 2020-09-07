<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAcademiPeriodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       /*  Schema::create('academic_periods', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('codigo', 50)->unique();
            $table->string('nombre', 100)->unique();
            $table->date('fecha_inicio_periodo');
            $table->date('fecha_fin_periodo');
            $table->date('fecha_fin_anulacion')->nullable();
            $table->date('fecha_inicio_cupo')->nullable();
            $table->date('fecha_fin_cupo')->nullable();
            $table->date('fecha_inicio_ordinaria')->nullable();
            $table->date('fecha_fin_ordinaria')->nullable();
            $table->date('fecha_inicio_extraordinaria')->nullable();
            $table->date('fecha_fin_extraordinaria')->nullable();
            $table->date('fecha_inicio_especial')->nullable();
            $table->date('fecha_fin_especial')->nullable();
            $table->string('estado', 20)->default('ACTIVO');;
        }); esta tabla se va elavborar por el ingnug*/ 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('academi_periods');
    }
}
