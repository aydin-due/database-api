const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const mission1 = await prisma.mission.upsert({
      where: { name: 'Mission 1' },
      update: {},
      create: {
        name: 'Mission 1',
				lang: 'Javascript',
				missionCommander: 'Carlo Gilmar',
        enrollments: 23,
        hasCertification: true
      },
    });

    const mission2 = await prisma.mission.upsert({
      where: { name: 'Mission 2' },
      update: {},
      create: {
        name: 'Mission 2',
				lang: 'Python',
				missionCommander: 'Fernanda Ochoa',
        enrollments: 34,
        hasCertification: false
      },
    });

    const mission3 = await prisma.mission.upsert({
      where: { name: 'Mission 3' },
      update: {},
      create: {
        name: 'Mission 3',
				lang: 'Node',
				missionCommander: 'Carlo Gilmar',
        enrollments: 45,
        hasCertification: true
      },
    });

    console.log('Create 3 explorers and 3 missions');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();