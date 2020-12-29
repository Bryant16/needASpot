"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    
     
    return queryInterface.bulkInsert(
      "Trainers",
      [
        {
          name: "Bryant Klein",
          days: ["M", "T", "W", "TH", "F"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Strength Training",
          certifications: ["NSCA CSCS", "KETTLEBELL LVL 1", "FIRST AID/CPR"],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: "Klein Gym",
          address: "Rochelle Park, NJ",
          website: "www.kleinfitness.com",
          email: "kleinb1616@gmail.com",
          phoneNumber: "555-201-1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Christina Corino",
          days: ["M", "T", "W", "TH", "F", "S"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Kettlebell",
          certifications: [
            "FST LVL 2",
            "KETTLEBELL LVL 2",
            "Pre/Post Naval",
            "FIRST AID/CPR",
          ],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: "Independent",
          address: "Rochelle Park, NJ",
          website: "www.kleinfitness.com",
          email: "kleinb1616@gmail.com",
          phoneNumber: "555-201-1234",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          days: ["M", "T", "W", "TH", "F", "S"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Kettlebell",
          certifications: [
            "FST LVL 2",
            "KETTLEBELL LVL 2",
            "Pre/Post Naval",
            "FIRST AID/CPR",
          ],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: faker.company.companyName(),
          address: `${faker.address.city()},${faker.address.state()}`,
          website: faker.internet.domainName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          days: ["M", "T", "W", "TH", "F", "S"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Kettlebell",
          certifications: [
            "FST LVL 2",
            "KETTLEBELL LVL 2",
            "Pre/Post Naval",
            "FIRST AID/CPR",
          ],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: faker.company.companyName(),
          address: `${faker.address.city()},${faker.address.state()}`,
          website: faker.internet.domainName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          days: ["M", "T", "W", "TH", "F", "S"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Kettlebell",
          certifications: [
            "FST LVL 2",
            "KETTLEBELL LVL 2",
            "Pre/Post Naval",
            "FIRST AID/CPR",
          ],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: faker.company.companyName(),
          address: `${faker.address.city()},${faker.address.state()}`,
          website: faker.internet.domainName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          days: ["M", "T", "W", "TH", "F", "S"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Kettlebell",
          certifications: [
            "FST LVL 2",
            "KETTLEBELL LVL 2",
            "Pre/Post Naval",
            "FIRST AID/CPR",
          ],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: faker.company.companyName(),
          address: `${faker.address.city()},${faker.address.state()}`,
          website: faker.internet.domainName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          days: ["M", "T", "W", "TH", "F", "S"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Kettlebell",
          certifications: [
            "FST LVL 2",
            "KETTLEBELL LVL 2",
            "Pre/Post Naval",
            "FIRST AID/CPR",
          ],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: faker.company.companyName(),
          address: `${faker.address.city()},${faker.address.state()}`,
          website: faker.internet.domainName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: faker.name.findName(),
          days: ["M", "T", "W", "TH", "F", "S"],
          open: "5:00AM",
          close: "8:30PM",
          style: "Kettlebell",
          certifications: [
            "FST LVL 2",
            "KETTLEBELL LVL 2",
            "Pre/Post Naval",
            "FIRST AID/CPR",
          ],
          education: "B.S. Exercise Science",
          specialities: [
            "Strength Training",
            "Fat Loss",
            "Athletic Development",
          ],
          gym: faker.company.companyName(),
          address: `${faker.address.city()},${faker.address.state()}`,
          website: faker.internet.domainName(),
          email: faker.internet.email(),
          phoneNumber: faker.phone.phoneNumber(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Trainers", null, {});
  },
};
