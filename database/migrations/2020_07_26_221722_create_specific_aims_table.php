<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpecificAimsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('specific_aims', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->references('id')->on('projects');
            $table->string('description',100);
            $table->string('indicator',100);
            $table->string('trackingMeans',100);
            $table->foreignId('aims_types')->references('id')->on('catalogues');
            //$table->bigInteger('parent_code_id')->nullable();
            $table->foreignId('parent_code_id')->nullable()->references('id')->on('specific_aims');//tabla recusiva
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
        Schema::dropIfExists('specific_aims');
    }
}
