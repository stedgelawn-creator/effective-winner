import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1680000000000 implements MigrationInterface {
  name = 'Init1680000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "client" ("id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(), "name" varchar NOT NULL, "email" varchar, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now())`);
    await queryRunner.query(`CREATE TABLE "visit" ("id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(), "scheduledAt" TIMESTAMP NOT NULL, "status" varchar NOT NULL DEFAULT 'pending', "clientId" uuid, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now())`);
    await queryRunner.query(`ALTER TABLE "visit" ADD CONSTRAINT "FK_client" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE SET NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "visit" DROP CONSTRAINT "FK_client"`);
    await queryRunner.query(`DROP TABLE "visit"`);
    await queryRunner.query(`DROP TABLE "client"`);
  }
}
