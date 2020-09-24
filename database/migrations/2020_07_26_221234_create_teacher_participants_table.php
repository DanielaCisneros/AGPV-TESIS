<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeacherParticipantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teacher_participants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('state_id')->constrained('states')->default(1);
            $table->foreignId('teacher_id')->references('id')->on('users');//se va de toda la tabla usuarios
            $table->foreignId('project_id')->references('id')->on('projects');
            $table->string('teachingPost',100); //ser un catalogo
            $table->string('work_hour',100);
            $table->text('assingnedRole',1000);
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
        Schema::dropIfExists('teacher_participants');
    }
}
