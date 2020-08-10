<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activitis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('result_id')->references('id')->on('results');
            $table->foreignId('means_of_verification_id')->references('id')->on('means_of_verifications');
            $table->string('detail', 200);
            $table->string('indicator', 100);
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
        Schema::dropIfExists('activitis');
    }
}
