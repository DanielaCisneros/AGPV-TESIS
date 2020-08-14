<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('charitable_institution_id')->references('id')->on('charitable_institutions');                 
            $table->foreignId('academi_period_id')->references('id')->on('academi_periods');
            $table->foreignId('career_id')->constrained();
            $table->foreignId('assigned_line_id')->references('id')->on('catalogues');
            $table->foreignId('bonding_activitie_id')->references('id')->on('bonding_activities');
            $table->foreignId('research_area_id')->references('id')->on('research_areas');
            $table->foreignId('linkage_axe_id')->references('id')->on('linkage_axes');
            $table->string('codeAgreement',10);
            $table->string('projectName',100);
            $table->string('state',100);
            $table->string('field',100);
            $table->string('aim',100);
            $table->foreignId('fraquency_of_activities')->references('id')->on('catalogues');
            $table->string('cycle',100);
            $table->string('leadTime',3);
            $table->date('deliveryDate');// tiempo
            $table->date('startDate');// tiempo
            $table->date('finishDate');//tienmpo
            $table->string('linkingProjectGeneralDescription',300);
            $table->string('introduction',300);
            $table->string('situationalAnalysis',300);
            $table->string('foundation',300);
            $table->string('justification',300);
            $table->string('authorizedBy',200);
            $table->string('developeDBy',200);
            $table->string('schedules',300);//cronograma
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
