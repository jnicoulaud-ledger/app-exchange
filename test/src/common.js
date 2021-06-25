import { bip32asBuffer } from "./bip32";
import { listen } from "@ledgerhq/logs";

listen((log) => {
    console.log(log);
});

// This values where generated by ./tools/index.js scripts
export const swapTestPrivateKey: Buffer = Buffer.from(
    [0x1D, 0x20, 0x2B, 0xC5, 0xEE, 0x1C, 0xED, 0x2F, 0xE7, 0xAF,
        0x32, 0x38, 0x20, 0x16, 0xA1, 0x7, 0x35, 0x5D, 0xC0, 0xD2,
        0x4E, 0x22, 0x73, 0x41, 0xF4, 0x31, 0xA, 0x3C, 0xC, 0x50,
        0xD9, 0x3D]);

export const partnerSerializedNameAndPubKey: Buffer = Buffer.from(
    [0x9, 0x53, 0x57, 0x41, 0x50, 0x5F, 0x54, 0x45, 0x53, 0x54, 0x4, 0x66, 0xA, 0x15, 0x3, 0x9, 0xFB, 0x52, 0xF3, 0xD4, 0x2C, 0x27, 0xAD, 0x4, 0xDC, 0x31, 0x99, 0xAA, 0x23, 0x37, 0xBD, 0x2A, 0x8A, 0x0, 0x2C, 0x53, 0x37, 0xD1, 0x78, 0x8A, 0xE3, 0x47, 0xD3, 0x33, 0x6E, 0x0, 0xEA, 0x33, 0xF4, 0x77, 0x8C, 0xD9, 0x1F, 0xF7, 0xD2, 0x8A, 0x89, 0x42, 0xEF, 0xD7, 0x73, 0x5D, 0xC3, 0xAD, 0x1B, 0x74, 0x53, 0xF1, 0xB9, 0xBD, 0x1F, 0xB4, 0xFE, 0x65, 0xFD]);

export const DERSignatureOfPartnerNameAndPublicKey: Buffer = Buffer.from(
    [0x30, 0x44, 0x2, 0x20, 0x50, 0xC, 0xA, 0xCF, 0x95, 0x82, 0x0, 0x88, 0x4B, 0x23, 0xC6, 0xAE, 0x7F, 0xEE, 0xCB, 0x1, 0x36, 0x6D, 0x62, 0x48, 0xF4, 0xEA, 0xCB, 0x45, 0x2C, 0x60, 0x81, 0xE9, 0x8, 0x36, 0xDC, 0xCC, 0x2, 0x20, 0x7D, 0x78, 0xCB, 0xC9, 0x10, 0x3D, 0x3, 0xAB, 0x2B, 0x64, 0xE1, 0x61, 0x52, 0x4F, 0xB4, 0xF3, 0xCD, 0x9A, 0x88, 0x3F, 0x7F, 0xED, 0xBF, 0x92, 0xCB, 0x48, 0xBF, 0x7A, 0x10, 0x2D, 0x87, 0x30]);

// 3 BTC 7 Bitcoin 0
export const BTCConfig = Buffer.from([0x3, 0x42, 0x54, 0x43, 0x7, 0x42, 0x69, 0x74, 0x63, 0x6F, 0x69, 0x6E, 0x0]);
export const BTCConfigSignature = Buffer.from([0x30, 0x45, 0x2, 0x21, 0x0, 0xCB, 0x17, 0x43, 0x82, 0x30, 0x22, 0x19, 0xDC, 0xA3, 0x59, 0xC0, 0xA4, 0xD4, 0x57, 0xB2, 0x56, 0x9E, 0x31, 0xA0, 0x6B, 0x2C, 0x25, 0xC0, 0x8, 0x8A, 0x2B, 0xD3, 0xFD, 0x6C, 0x4, 0x38, 0x6A, 0x2, 0x20, 0x2C, 0x6D, 0xA, 0x5B, 0x92, 0x4A, 0x41, 0x46, 0x21, 0x6, 0x7E, 0x31, 0x6F, 0x2, 0x1A, 0xA1, 0x3A, 0xA5, 0xB2, 0xEE, 0xE2, 0xBF, 0x36, 0xEA, 0x3C, 0xFD, 0xDE, 0xBC, 0x5, 0x3B, 0x20, 0x1B]);

export const LTCConfig = Buffer.from([0x3, 0x4C, 0x54, 0x43, 0x8, 0x4C, 0x69, 0x74, 0x65, 0x63, 0x6F, 0x69, 0x6E, 0x0]);
export const LTCConfigSignature = Buffer.from([0x30, 0x45, 0x2, 0x21, 0x0, 0x98, 0xF7, 0xA, 0xD7, 0xD7, 0x57, 0xE3, 0x45, 0x2E, 0xE2, 0x97, 0x21, 0x5B, 0xE6, 0xC, 0xE0, 0x18, 0x87, 0xCF, 0xAB, 0x29, 0xF9, 0x98, 0x11, 0x34, 0x32, 0x82, 0x3F, 0x94, 0xD3, 0x5B, 0x88, 0x2, 0x20, 0x31, 0xE1, 0x41, 0x9C, 0xF1, 0xCE, 0x94, 0x34, 0x1, 0xE5, 0x70, 0x32, 0x52, 0x8E, 0x3A, 0x99, 0xEC, 0x7D, 0x33, 0x86, 0x65, 0x26, 0x5D, 0xED, 0xF2, 0x5B, 0xEC, 0xA4, 0x5F, 0x49, 0x52, 0xFB]);

export const XRPConfig = Buffer.from([0x3, 0x58, 0x52, 0x50, 0x3, 0x58, 0x52, 0x50, 0x0]);
export const XRPConfigSignature = Buffer.from([0x30, 0x45, 0x2, 0x21, 0x0, 0x90, 0xEA, 0x97, 0x51, 0xD8, 0xA8, 0x28, 0x75, 0x4B, 0xA2, 0x32, 0xBD, 0xC1, 0xC2, 0xEF, 0x9F, 0x8C, 0x5, 0x47, 0x60, 0x8F, 0x3A, 0xE5, 0x21, 0x32, 0xA2, 0xD9, 0xEB, 0x83, 0x3, 0x7, 0xE3, 0x2, 0x20, 0x79, 0xBE, 0x69, 0x9A, 0x56, 0xDB, 0x93, 0xD, 0xA3, 0x4, 0xC8, 0x3D, 0xAB, 0xF8, 0x6, 0x93, 0x8C, 0x86, 0xD6, 0xC7, 0xE2, 0x43, 0xF0, 0x27, 0xAF, 0xF3, 0x8B, 0x1C, 0xBC, 0xE, 0xDF, 0xFE]);

export const XLMConfig = Buffer.from([0x3, 0x58, 0x4C, 0x4D, 0x7, 0x53, 0x74, 0x65, 0x6C, 0x6C, 0x61, 0x72, 0x0]);
export const XLMConfigSignature = Buffer.from([0x30, 0x44, 0x2, 0x20, 0x1F, 0xEA, 0x2C, 0x99, 0x9B, 0x73, 0x5A, 0x49, 0xB1, 0x97, 0x0, 0x5, 0xB0, 0x1, 0xC8, 0x88, 0x50, 0x80, 0x81, 0xD2, 0x8C, 0x9C, 0xB4, 0x2D, 0x28, 0x9F, 0xD1, 0xC6, 0x5C, 0xD8, 0x91, 0xF9, 0x2, 0x20, 0x23, 0xD3, 0xEF, 0xD7, 0xE5, 0x85, 0x88, 0x6C, 0x12, 0x9E, 0x96, 0xFE, 0x61, 0x88, 0x38, 0xE8, 0x65, 0xF1, 0xAB, 0x27, 0x9D, 0x15, 0xE5, 0xB6, 0x76, 0xA1, 0x55, 0xA2, 0x11, 0xCA, 0x74, 0xC9]);

export const XTZConfig = Buffer.from([0x3, 0x58, 0x54, 0x5A, 0xC, 0x54, 0x65, 0x7A, 0x6F, 0x73, 0x20, 0x57, 0x61, 0x6C, 0x6C, 0x65, 0x74, 0x0]);
export const XTZConfigSignature = Buffer.from([0x30, 0x44, 0x2, 0x20, 0x68, 0xF3, 0xE3, 0xCC, 0xBF, 0x30, 0xF5, 0x53, 0xC0, 0x5E, 0xC8, 0xF4, 0x73, 0x65, 0x96, 0x66, 0x23, 0xA9, 0x17, 0x33, 0xD2, 0xD0, 0xCE, 0xC6, 0x5C, 0xBC, 0xBE, 0x1F, 0x87, 0x9, 0x63, 0x32, 0x2, 0x20, 0x64, 0x11, 0xD6, 0xED, 0xA5, 0x9F, 0xD1, 0x5, 0xB2, 0x4E, 0x2E, 0x5D, 0x82, 0x9C, 0x81, 0x9C, 0xA2, 0x95, 0x9, 0xF6, 0xD8, 0x67, 0xA2, 0x52, 0x4E, 0x73, 0xB3, 0xF4, 0xE1, 0x99, 0xFA, 0x4F]);

export const ETHConfig = Buffer.from([0x3, 0x45, 0x54, 0x48, 0x8, 0x45, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6D, 0x5, 0x3, 0x45, 0x54, 0x48, 0x12]);
export const ETHConfigSignature = Buffer.from([0x30, 0x44, 0x2, 0x20, 0x65, 0xD7, 0x93, 0x1A, 0xB3, 0x14, 0x43, 0x62, 0xD5, 0x7E, 0x3F, 0xDC, 0xC5, 0xDE, 0x92, 0x1F, 0xB6, 0x50, 0x24, 0x73, 0x7D, 0x91, 0x7F, 0xA, 0xB1, 0xF8, 0xB1, 0x73, 0xD1, 0xED, 0x3C, 0x2E, 0x2, 0x20, 0x27, 0x49, 0x35, 0x68, 0xD1, 0x12, 0xDC, 0x53, 0xC7, 0x17, 0x7F, 0x8E, 0x5F, 0xC9, 0x15, 0xD9, 0x1A, 0x90, 0x37, 0x80, 0xA0, 0x67, 0xBA, 0xDF, 0x10, 0x90, 0x85, 0xA7, 0x3D, 0x36, 0x3, 0x23]);

// 2 AE 8 Ethereum 4 2 AE 12 (18 decimals)
export const AEConfig = Buffer.from([0x2, 0x41, 0x45, 0x8, 0x45, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6D, 0x4, 0x2, 0x41, 0x45, 0x12]);
export const AEConfigSignature = Buffer.from([0x30, 0x45, 0x2, 0x21, 0x0, 0x81, 0xC3, 0x9F, 0x9D, 0x43, 0x6B, 0xFC, 0xA, 0x2E, 0x39, 0xB3, 0x3F, 0x83, 0x70, 0x91, 0x30, 0x2, 0x74, 0xE3, 0xC6, 0xC3, 0x14, 0x8F, 0x90, 0xC1, 0xDA, 0x73, 0xB6, 0x35, 0x76, 0x31, 0x31, 0x2, 0x20, 0x15, 0x97, 0xDC, 0xC9, 0x4C, 0x2E, 0x29, 0x4D, 0x3A, 0xB5, 0x17, 0xDF, 0x2F, 0xCF, 0xDF, 0x45, 0x6E, 0xCD, 0x35, 0x3A, 0x51, 0xF9, 0xF4, 0x64, 0x83, 0x62, 0x1, 0x10, 0x6C, 0x6D, 0x30, 0x70]);

export const USDTConfig = Buffer.from([0x4, 0x55, 0x53, 0x44, 0x54, 0x8, 0x45, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6D, 0x6, 0x4, 0x55, 0x53, 0x44, 0x54, 0x6]);
export const USDTConfigSignature = Buffer.from([0x30, 0x44, 0x2, 0x20, 0xB, 0x3A, 0x84, 0x45, 0x43, 0x66, 0x6B, 0xBD, 0xC9, 0x16, 0x42, 0xE1, 0xD0, 0x70, 0xAF, 0xA6, 0x8, 0x45, 0x10, 0x6D, 0x77, 0xBF, 0xE2, 0xBD, 0x9B, 0x5B, 0x9D, 0x16, 0x5D, 0xED, 0x6A, 0xB5, 0x2, 0x20, 0xF, 0xEA, 0xB0, 0x18, 0x27, 0x83, 0x66, 0xA8, 0x25, 0xE6, 0x2F, 0x42, 0x4A, 0x68, 0xAE, 0xCE, 0xDD, 0x41, 0x88, 0xA9, 0xD2, 0x49, 0x3E, 0x21, 0x70, 0xE6, 0xDF, 0xD6, 0xE7, 0x11, 0x3D, 0xB4]);

export const REPConfig = Buffer.from([0x3, 0x52, 0x45, 0x50, 0x8, 0x45, 0x74, 0x68, 0x65, 0x72, 0x65, 0x75, 0x6D, 0x5, 0x3, 0x52, 0x45, 0x50, 0x12]);
export const REPConfigSignature = Buffer.from([0x30, 0x45, 0x2, 0x21, 0x0, 0xB9, 0x73, 0x3B, 0xE7, 0x1E, 0xDE, 0x42, 0x8A, 0x1F, 0x44, 0x6, 0x6D, 0x36, 0x92, 0x61, 0x4D, 0xDC, 0xFE, 0x45, 0x3B, 0xF8, 0xB5, 0xBA, 0xF, 0x7D, 0x8B, 0x4E, 0x5D, 0x5B, 0x2, 0xD1, 0x63, 0x2, 0x20, 0x50, 0x8C, 0xC7, 0xB8, 0xFA, 0x8A, 0xE9, 0x70, 0xFE, 0xCC, 0x96, 0x8D, 0xB2, 0xA3, 0xF, 0x65, 0xB9, 0xE3, 0x50, 0xD, 0x74, 0x52, 0x27, 0x7D, 0xC6, 0x53, 0x45, 0xA6, 0xA2, 0xD5, 0xE4, 0x75]);





export function numberToBigEndianBuffer(x: number): Uint8Array {
    var hex = x.toString(16);
    return Uint8Array.from(Buffer.from(hex.padStart(hex.length + hex.length % 2, '0'), 'hex'));
}


// only for BTC, where we support multiple address format
export function getSerializedAddressParametersBTC(
    path: string, format?: AddressFormat
): { addressParameters: Buffer } {
    type AddressFormat = "legacy" | "p2sh" | "bech32";
    const addressFormatMap = {
        legacy: 0,
        p2sh: 1,
        bech32: 2
    };
    format = format || "legacy";
    if (!(format in addressFormatMap)) {
        throw new Error("btc.getWalletPublicKey invalid format=" + format);
    }
    const buffer = bip32asBuffer(path);
    const addressParameters = Buffer.concat([Buffer.from([addressFormatMap[format]]), buffer]);
    return { addressParameters };
}

// For every other coins
export function getSerializedAddressParameters(
    path: string
): { addressParameters: Buffer } {
    const addressParameters = bip32asBuffer(path);
    return { addressParameters };
}