import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background: url("https://www.ugto.mx/images/certificados/fondo_certificado.png") no-repeat;
  background-size: cover;
  color: #000;
  font-size: 25px;\start\repos\Darkom792\render_dany
  padding: 15px;
  margin: auto;
  width: 98%;
  height: 612px;
  text-align: center;
`;

const titleStyle = css `
 padding-top: 100px;

`;

export const CocTemplate: FunctionComponent<TemplateProps<CocTemplateCertificate> & { className?: string }> = ({
  document,
  className = "",
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <h1 css={titleStyle} className={className} id="title">{document.name}</h1>
      <div>los invita</div>
      <h2>{document.recipient.name}</h2>
    </div>
  );
};