/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Presiden() {
  const [target, setTarget] = useState(100);

  return (
    <>
      <GubernurDKI target={target} />
      <GubernurJabar target={target} />
    </>
  );
}

// Cabang DKI
function GubernurDKI({ target }) {
  return <WalikotaDKI target={target} />;
}

function WalikotaDKI({ target }) {
  return <CamatDKI target={target} />;
}

function CamatDKI({ target }) {
  return <div>{target}</div>;
}

// Cabang Jabar
function GubernurJabar({ target }) {
  return <WalikotaJabar target={target} />;
}

function WalikotaJabar({ target }) {
  return <CamatJabar target={target} />;
}

function CamatJabar({ target }) {
  return <div>Target Pembangunan Jabar: {target}</div>;
}

export default Presiden;
