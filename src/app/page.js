"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div
        className="h-screen w-screen lg:flex items-center gap-8 justify-betwewen p-24"
        style={{
          backgroundImage: "url('Home.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-12 justify-between w-screen">
          <h1 className="text-6xl font-bold">
            Do <span className="text-indigo-600">0</span> ao<br></br>{" "}
            <span className="text-indigo-600">PHP master</span>
          </h1>
          <span className="text-xl max-w-lg text-gray-600">
            A abordagem abrangente do conteúdo proporciona uma compreensão
            profunda dos conceitos fundamentais e avançados da linguagem. Além
            disso, a clareza e a organização exemplares das explicações tornam
            mais fácil a absorção do conhecimento, independentemente do teu
            nível de experiência prévia em programação.
          </span>
          <div className="flex gap-12">
            <a
              href="https://payment.hotmart.com/next/P84647993C?sck=HOTMART_PRODUCT_PAGE&off=2szbrcjz&hotfeature=32,34&bid=1691863865833"
              target="_blank"
              className="btn btn-success btn-lg text-white"
            >
              Comprar
            </a>
            <button
              className="btn btn-lg text-black bg-white border-0"
              onClick={() => window.my_modal_1.showModal()}
            >
              Ver Vídeo
            </button>
            <dialog id="my_modal_1" className="modal modal-lg">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl bg-white"
              >
                <p className="py-4 flex items-center justify-center">
                  <iframe
                    src="https://player.vimeo.com/video/844277194?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    width="700"
                    height="400"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Apresentação"
                  ></iframe>
                </p>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Fechar</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
        <Image src={"/hero.png"} width={700} height={700} />
      </div>
      <div className="flex items-center justify-center bg-purple-200"></div>
    </main>
  );
}
