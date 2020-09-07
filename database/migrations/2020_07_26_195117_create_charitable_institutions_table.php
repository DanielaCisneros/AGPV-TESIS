<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCharitableInstitutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charitable_institutions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('state_id')->constrained('states')->default(1);
            $table->text('logo')->constrained('ignug.images');//tabla para imgenes conectar
            $table->string('ruc',15)->unique();
            $table->string('name',100);
            $table->string('address',100);   
            $table->text('indirect_beneficiary',500);
            $table->string('legal_representative_name',60);
            $table->string('legal_representative_lastname',600);
            $table->string('legal_representative_identification',100);
            $table->string('legal_representative_position',100);
            $table->string('coordinator_name',300);
            $table->string('coordinator_lastname',300);
            $table->string('coordinator_position',300);
            $table->string('direct_beneficiary',300);
            $table->text('COMPANYATT_ACHED_FILES');//va en la tabla files
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
        Schema::dropIfExists('charitable_institutions');
    }
}
