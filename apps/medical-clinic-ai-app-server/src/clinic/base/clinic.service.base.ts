/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Clinic as PrismaClinic,
  Appointment as PrismaAppointment,
  Doctor as PrismaDoctor,
} from "@prisma/client";

export class ClinicServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ClinicCountArgs, "select">): Promise<number> {
    return this.prisma.clinic.count(args);
  }

  async clinics(args: Prisma.ClinicFindManyArgs): Promise<PrismaClinic[]> {
    return this.prisma.clinic.findMany(args);
  }
  async clinic(
    args: Prisma.ClinicFindUniqueArgs
  ): Promise<PrismaClinic | null> {
    return this.prisma.clinic.findUnique(args);
  }
  async createClinic(args: Prisma.ClinicCreateArgs): Promise<PrismaClinic> {
    return this.prisma.clinic.create(args);
  }
  async updateClinic(args: Prisma.ClinicUpdateArgs): Promise<PrismaClinic> {
    return this.prisma.clinic.update(args);
  }
  async deleteClinic(args: Prisma.ClinicDeleteArgs): Promise<PrismaClinic> {
    return this.prisma.clinic.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.clinic
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }

  async findDoctors(
    parentId: string,
    args: Prisma.DoctorFindManyArgs
  ): Promise<PrismaDoctor[]> {
    return this.prisma.clinic
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .doctors(args);
  }
}
