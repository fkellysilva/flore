"use client";

export function Map() {
  return (
    <div className="w-full">
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.075428119333!2d-34.976551557803774!3d-7.986228459363539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1099886c8ac1%3A0x52f56db5215862b5!2sGaleria%20Flamboyant!5e0!3m2!1spt-BR!2sbr!4v1733230122631!5m2!1spt-BR!2sbr"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
