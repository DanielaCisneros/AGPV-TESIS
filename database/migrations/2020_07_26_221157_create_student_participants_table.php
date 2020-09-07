<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentParticipantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_participants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('state_id')->constrained('states')->default(1);
            $table->foreignId('student_id')->references('id')->on('users');//autificatio_user
            $table->foreignId('project_id')->references('id')->on('projects');
            $table->string('degree',100);//solo se llama de la carrera 
            $table->text('assingnedRoles',1000);
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
        Schema::dropIfExists('student_participants');
    }
}
