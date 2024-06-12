import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "Evento de Informe del 2024",
  issuers: [
    {
      name: "Rocio",
      documentStore: "0x9DA8656139AcfE93Ea78682E547c24b229b1f106",
      identityProof: {
        location: "openattestation.microcredenciales.mx/",
        type: v2.IdentityProofType.DNSTxt,
      },
    },
  ],
  recipient: {
    name: "Universidad de Guanajuato",
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:6006",
  },
};