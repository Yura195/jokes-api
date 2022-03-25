import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1648178220319 implements MigrationInterface {
    name = 'Initial1648178220319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "favorites_jokes" (
                "id" SERIAL NOT NULL,
                "value" character varying NOT NULL,
                CONSTRAINT "PK_f1c3638b71950627b110d6aaa07" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "favorites_jokes"
        `);
    }

}
