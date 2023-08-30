const jsf = require("json-schema-faker");
const fs = require("fs");
const { faker } = require("@faker-js/faker");
jsf.extend("faker", () => faker);

const schema = {
  type: "object",
  required: [
    "createReport",
    "statusOe",
    "templateOe",
    "arsipOe",
    "materialRequest",
    "logKota",
    "logDaftarUpah",
    "logDaftarSewa",
    "logDaftarMobilisasi",
    "logKategoriMaterialVendor",
    "logDaftarMaterialVendor",
    "logMaterialNonVendor",
    "kota",
    "unitBisnis",
    "daftarUpah",
    "daftarSewa",
    "daftarMobilisasi",
    "kategoriMaterialVendor",
    "daftarMaterialVendor",
    "daftarMaterialNonVendor",
    "createHsp",
    "viewHsp",
    "user",
    "roles",
    "newSticker",
    "fileSharing",
    "sharingReferensi",
    "quotation",
    "tanyaJawab",
  ],
  properties: {
    createReport: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/createReport" },
    },
    statusOe: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/statusOe" },
    },
    templateOe: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/templateOe" },
    },
    arsipOe: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/arsipOe" },
    },
    materialRequest: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/materialRequest" },
    },
    oeReport: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/oeReport" },
    },
    logKota: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/logKota" },
    },
    logDaftarUpah: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/logDaftarUpah" },
    },
    logDaftarSewa: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/logDaftarSewa" },
    },
    logKategoriMaterialVendor: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/logKategoriMaterialVendor" },
    },
    logDaftarMaterialVendor: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/logDaftarMaterialVendor" },
    },
    kota: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/kota" },
    },
    unitBisnis: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/unitBisnis" },
    },
    daftarUpah: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/daftarUpah" },
    },
    daftarSewa: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/daftarSewa" },
    },
    daftarMobilisasi: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/daftarMobilisasi" },
    },
    kategoriMaterialVendor: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/kategoriMaterialVendor" },
    },
    daftarMaterialVendor: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/daftarMaterialVendor" },
    },
    daftarMaterialNonVendor: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/daftarMaterialNonVendor" },
    },
    createHsp: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/createHsp" },
    },
    viewHsp: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/viewHsp" },
    },
    user: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/user" },
    },
    roles: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/roles" },
    },
    newSticker: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/newSticker" },
    },
    fileSharing: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/fileSharing" },
    },
    sharingReferensi: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/sharingReferensi" },
    },
    quotation: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/quotation" },
    },
    tanyaJawab: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/tanyaJawab" },
    },
  },
  definitions: {
    createReport: {
      type: "object",
      required: [
        "IdCreate",
        "JudulOe",
        "Kota",
        "UnitBisnis",
        "MataAnggaran",
        "NomorWo",
        "JenisOe",
        "TipeOe",
        "TanggalOe",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdCreate: faker.datatype.uuid(),
        JudulOe: {
          type: "string",
          faker: "person.jobTitle",
        },
        Kota: faker.location.city(),
        UnitBisnis: {
          type: "string",
          faker: "person.jobArea",
        },
        MataAnggaran: {
          type: "integer",
          minimum: 1,
          maximum: 10,
        },
        NomorWo: {
          type: "string",
          faker: "phone.number",
        },
        JenisOe: {
          type: "string",
          faker: "company.name",
        },
        TipeOe: {
          type: "string",
          faker: "person.jobType",
        },
        TanggalOe: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    statusOe: {
      type: "object",
      required: [
        "IdStatus",
        "JudulOe",
        "Kota",
        "UnitBisnis",
        "MataAnggaran",
        "TanggalOe",
        "Usulkan",
        "Review",
        "Approve",
      ],
      properties: {
        IdStatus: faker.datatype.uuid(),
        JudulOe: {
          type: "string",
          faker: "person.jobTitle",
        },
        Kota: faker.location.city(),
        UnitBisnis: {
          type: "string",
          faker: "person.jobArea",
        },
        MataAnggaran: {
          type: "integer",
          minimum: 1,
          maximum: 10,
        },
        TanggalOe: {
          type: "string",
          faker: "date.anytime",
        },
        Usulkan: {
          type: "string",
          faker: "location.timeZone",
        },
        Review: {
          type: "string",
          faker: "person.jobDescriptor",
        },
        Approve: faker.helpers.arrayElement(["Approved", "Rejected"]),
      },
    },
    templateOe: {
      type: "object",
      required: ["IdTemplate", "JudulOe", "Kota", "UnitBisnis", "UpdatedOn"],
      properties: {
        IdTemplate: faker.datatype.uuid(),
        JudulOe: {
          type: "string",
          faker: "person.jobTitle",
        },
        Kota: faker.location.city(),
        UnitBisnis: {
          type: "string",
          faker: "person.jobArea",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    arsipOe: {
      type: "object",
      required: [
        "IdArsip",
        "JudulOe",
        "Kota",
        "UnitBisnis",
        "MataAnggaran",
        "UpdatedOn",
      ],
      properties: {
        IdArsip: faker.datatype.uuid(),
        JudulOe: {
          type: "string",
          faker: "person.jobTitle",
        },
        Kota: faker.location.city(),
        UnitBisnis: {
          type: "string",
          faker: "person.jobArea",
        },
        MataAnggaran: {
          type: "integer",
          minimum: 1,
          maximum: 10,
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    materialRequest: {
      type: "object",
      required: ["IdMaterial", "Kategori", "Spesifikasi", "Unit", "Status"],
      properties: {
        IdMaterial: faker.datatype.uuid(),
        Kategori: {
          type: "string",
          faker: "person.jobTitle",
        },
        Spesifikasi: {
          type: "string",
          faker: "location.jobDescriptor",
        },
        Unit: {
          type: "string",
          faker: "person.jobType",
        },
        Status: faker.helpers.arrayElement(["Approved", "Rejected"]),
      },
    },
    oeReport: {
      type: "object",
      required: [
        "IdReport",
        "JudulOe",
        "Kota",
        "UnitBisnis",
        "MataAnggaran",
        "NomorWo",
        "TipeOe",
        "TanggalOe",
        "UpdatedOn",
        "UniqueId",
      ],
      properties: {
        IdReport: faker.datatype.uuid(),
        JudulOe: {
          type: "string",
          faker: "person.jobTitle",
        },
        Kota: faker.location.city(),
        UnitBisnis: {
          type: "string",
          faker: "person.jobArea",
        },
        MataAnggaran: {
          type: "integer",
          minimum: 1,
          maximum: 10,
        },
        NomorWo: {
          type: "string",
          faker: "phone.number",
        },
        TipeOe: {
          type: "string",
          faker: "person.jobType",
        },
        TanggalOe: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UniqueId:
          faker.datatype.number(10) +
          "/" +
          faker.location.city() +
          "/" +
          faker.datatype.number(),
      },
    },
    logKota: {
      type: "object",
      required: [
        "IdKota",
        "Kota",
        "KoefKemahalan",
        "KoefUpah",
        "Active",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdKota: faker.datatype.uuid(),
        Kota: faker.location.city(),
        KoefKemahalan: faker.commerce.price({ min: 0 }),
        KoefUpah: faker.commerce.price({ min: 0 }),
        Active: faker.helpers.arrayElement(["Active", "Non Active"]),
        CreatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "date.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    logDaftarUpah: {
      type: "object",
      required: [
        "IdDaftarUpah",
        "Description",
        "Satuan",
        "Harga",
        "Referensi",
        "Active",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdDaftarUpah: faker.datatype.uuid(),
        Description: {
          type: "string",
          faker: "person.jobDescriptor",
        },
        Harga: faker.commerce.price({ min: 0 }),
        Referensi: faker.random.word(),
        Active: faker.helpers.arrayElement(["Active", "Non Active"]),
        CreatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "date.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    logDaftarSewa: {
      type: "object",
      required: [
        "IdDaftarSewa",
        "Description",
        "Harga",
        "Referensi",
        "Active",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdDaftarSewa: faker.datatype.uuid(),
        Description: {
          type: "string",
          faker: "person.jobDescriptor",
        },
        Harga: faker.commerce.price({ min: 0 }),
        Referensi: faker.random.word(),
        Active: faker.helpers.arrayElement(["Active", "Non Active"]),
        CreatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "date.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    logDaftarMobilisasi: {
      type: "object",
      required: [
        "IdDaftarMobilisasi",
        "Description",
        "Origin",
        "Destination",
        "Satuan",
        "Harga",
        "Active",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdDaftarMobilisasi: faker.datatype.uuid(),
        Description: {
          type: "string",
          faker: "person.jobDescriptor",
        },
        Origin: faker.location.city(),
        Destination: faker.location.city(),
        Satuan: faker.helpers.arrayElement(["Trip"]),
        Harga: faker.commerce.price({ min: 0 }),
        Active: faker.helpers.arrayElement(["Active", "Non Active"]),
        CreatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "date.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    logKategoriMaterialVendor: {
      type: "object",
      required: [
        "IdKategoriMaterialVendor",
        "NamaKategoriMaterial",
        "Active",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdKategoriMaterialVendor: faker.datatype.uuid(),
        NamaKategoriMaterial: faker.random.word(),
        Active: faker.helpers.arrayElement(["Active", "Non Active"]),
        CreatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "date.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    logDaftarMaterialVendor: {
      type: "object",
      required: [
        "IdDaftarMateriaVendor",
        "KategoriMaterial",
        "NamaMaterial",
        "SpesifikasiMaterial",
        "SatuanMaterial",
        "HargaMaterial",
        "TglQuotMaterial",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdDaftarMateriaVendor: faker.datatype.uuid(),
        KategoriMaterial: faker.datatype.number(10),
        NamaMaterial: faker.random.word(),
        SpesifikasiMaterial: faker.lorem.words(),
        SatuanMaterial: faker.helpers.arrayElement(["ton", "Unit"]),
        HargaMaterial: faker.commerce.price({ min: 0 }),
        TglQuotMaterial: {
          type: "string",
          faker: "date.anytime",
        },
        CreatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "date.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    logMaterialNonVendor: {
      type: "object",
      required: [
        "IdMaterialNonVendor",
        "Description",
        "Harga",
        "Referensi",
        "Active",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdMaterialNonVendor: faker.datatype.uuid(),
        Description: faker.lorem.words(),
        Harga: faker.commerce.price({ min: 0 }),
        Referensi: faker.lorem.words(),
        Active: faker.helpers.arrayElement(["Active", "Non Active"]),
        CreatedBy: {
          type: "string",
          faker: "person.fullName",
        },
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: {
          type: "string",
          faker: "date.fullName",
        },
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    kota: {
      type: "object",
      required: ["IdKota", "KoefKemahalan", "KoefUpah"],
      properties: {
        IdKota: faker.datatype.uuid(),
        KoefKemahalan: faker.commerce.price({ min: 0 }),
        KoefUpah: faker.commerce.price({ min: 0 }),
      },
    },
    unitBisnis: {
      type: "object",
      required: ["IdUnitBisnis", "Nama"],
      properties: {
        IdUnitBisnis: faker.datatype.uuid(),
        Nama: faker.random.word(),
      },
    },
    daftarUpah: {
      type: "object",
      required: ["IdDaftarUpah", "Satuan", "Harga", "Referensi"],
      properties: {
        IdDaftarUpah: faker.datatype.uuid(),
        Satuan:
          faker.helpers.arrayElement(["Org"]) +
          "/" +
          faker.helpers.arrayElement(["Hr"]),
        Harga: faker.commerce.price({ min: 0 }),
        Referensi: faker.lorem.words(),
      },
    },
    daftarSewa: {
      type: "object",
      required: [
        "IdDaftarSewa",
        "Description",
        "KategoriMaterial",
        "Satuan",
        "Harga",
        "Referensi",
      ],
      properties: {
        IdDaftarSewa: faker.datatype.uuid(),
        Description: faker.lorem.words(),
        KategoriMaterial: faker.random.word(),
        Satuan:
          faker.helpers.arrayElement(["Org"]) +
          "/" +
          faker.helpers.arrayElement(["Hr"]),
        Harga: faker.commerce.price({ min: 0 }),
        Referensi: faker.lorem.words(),
      },
    },
    daftarMobilisasi: {
      type: "object",
      required: [
        "IdDaftarMobilisasi",
        "Description",
        "Origin",
        "Destination",
        "Satuan",
        "Harga",
      ],
      properties: {
        IdDaftarSewa: faker.datatype.uuid(),
        Description: faker.lorem.words(),
        Origin: faker.location.city(),
        Destination: faker.location.city(),
        Satuan: faker.helpers.arrayElement(["Kg", "Trip"]),
        Harga: faker.commerce.price({ min: 0 }),
      },
    },
    kategoriMaterialVendor: {
      type: "object",
      required: ["IdKategoriMaterialVendor", "NamaKategoriMaterial"],
      properties: {
        IdKategoriMaterialVendor: faker.datatype.uuid(),
        NamaKategoriMaterial: faker.random.word(),
      },
    },
    daftarMaterialVendor: {
      type: "object",
      required: [
        "IdDaftarMaterialVendor",
        "NamaKategoriMaterial",
        "NamaMaterial",
        "Spesifikasi",
        "Satuan",
        "Harga",
        "TanggalQuot",
        "Brand",
      ],
      properties: {
        IdDaftarMaterialVendor: faker.datatype.uuid(),
        NamaKategoriMaterial: faker.random.word(),
        NamaMaterial: faker.random.word(),
        Spesifikasi: faker.lorem.words(),
        Satuan: faker.helpers.arrayElement(["Kg", "m", "Unit"]),
        Harga: faker.commerce.price({ min: 0 }),
        TanggalQuot: {
          type: "string",
          faker: "date.anytime",
        },
        Brand: faker.datatype.number(),
      },
    },
    daftarMaterialNonVendor: {
      type: "object",
      required: [
        "IdDaftarMaterialNonVendor",
        "Description",
        "NamaKategoriMaterial",
        "Satuan",
        "Harga",
        "Referensi",
      ],
      properties: {
        IdDaftarMaterialNonVendor: faker.datatype.uuid(),
        Description: faker.lorem.words(),
        NamaKategoriMaterial: faker.random.word(),
        Satuan: faker.helpers.arrayElement([
          "BH",
          "Unit",
          "Kg",
          "m",
          "Liter",
          "Hari",
        ]),
        Harga: faker.commerce.price({ min: 0 }),
        Referensi: faker.lorem.words(),
      },
    },
    createHsp: {
      type: "object",
      required: ["IdCreateHsp", "NamaTipeHsp"],
      properties: {
        IdCreateHsp: faker.datatype.uuid(),
        NamaTipeHsp: faker.lorem.words(),
      },
    },
    viewHsp: {
      type: "object",
      required: [
        "IdViewHsp",
        "Vol",
        "Satuan",
        "NamaItem",
        "Bahan",
        "Jasa",
        "Upah",
      ],
      properties: {
        IdViewHsp: faker.datatype.uuid(),
        Vol: faker.datatype.number(),
        Satuan: faker.helpers.arrayElement(["Kg", "Trip"]),
        NamaItem: faker.random.word(),
        Bahan: faker.random.words(),
        Jasa: faker.random.word(),
        Upah: faker.commerce.price({ min: 0 }),
      },
    },
    user: {
      type: "object",
      required: [
        "IdUser",
        "KodeUser",
        "Username",
        "Name",
        "Email",
        "Jabatan",
        "UserRole",
      ],
      properties: {
        IdUser: faker.datatype.uuid(),
        KodeUser: faker.datatype.number(),
        Username: faker.internet.userName(),
        Name: faker.person.fullName(),
        Email: faker.internet.email(),
        Jabatan: faker.person.jobTitle(),
        UserRole: faker.person.middleName(),
      },
    },
    roles: {
      type: "object",
      required: ["IdUserRole", "KodeUserRole", "Role"],
      properties: {
        IdUserRole: faker.datatype.uuid(),
        KodeUserRole: faker.datatype.number(),
        Role: faker.person.middleName(),
      },
    },
    newSticker: {
      type: "object",
      required: [
        "IdNewSticker",
        "Content",
        "Time",
        "CreatedBy",
        "CreatedOn",
        "UpdatedBy",
        "UpdatedOn",
      ],
      properties: {
        IdNewSticker: faker.datatype.uuid(),
        Content: faker.lorem.words(),
        Time: {
          type: "string",
          faker: "date.anytime",
        },
        CreatedBy: faker.person.fullName(),
        CreatedOn: {
          type: "string",
          faker: "date.anytime",
        },
        UpdatedBy: faker.person.fullName(),
        UpdatedOn: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
    fileSharing: {
      type: "object",
      required: ["IdFileSharing", "FileName", "Notes"],
      properties: {
        IdFileSharing: faker.datatype.uuid(),
        FileName: faker.random.word(),
        Notes: faker.lorem.words(),
      },
    },
    sharingReferensi: {
      type: "object",
      required: ["IdSharingReferensi", "FileName", "Notes"],
      properties: {
        IdSharingReferensi: faker.datatype.uuid(),
        FileName: faker.random.word(),
        Notes: faker.lorem.words(),
      },
    },
    quotation: {
      type: "object",
      required: ["IdMaterial", "TanggalQout", "Vendor"],
      properties: {
        IdMaterial: faker.datatype.uuid(),
        TanggalQout: {
          type: "string",
          faker: "date.anytime",
        },
        Vendor: faker.random.word(),
      },
    },
    tanyaJawab: {
      type: "object",
      required: [
        "IdTanyaJawab",
        "judul",
        "Prioritas",
        "Status",
        "Pembuat",
        "TanggalPembuatan",
      ],
      properties: {
        IdTanyaJawab: faker.datatype.uuid(),
        judul: faker.random.word(),
        Prioritas: faker.helpers.arrayElement(["High", "LOW", "MEDIUM"]),
        Status: faker.helpers.arrayElement(["Open", "CLOSED"]),
        Pembuat: faker.internet.email(),
        TanggalPembuatan: {
          type: "string",
          faker: "date.anytime",
        },
      },
    },
  },
};

jsf.resolve(schema).then((result) => {
  console.log("Result:", result);

  fs.writeFile(__dirname + "/../db.json", JSON.stringify(result), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
