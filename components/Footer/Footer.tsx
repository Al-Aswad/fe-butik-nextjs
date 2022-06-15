import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full p-2 mx-auto bg-gray-800">
      <div className="w-full p-2 mx-auto sm:p-4 lg:w-3/4">
        <div className="justify-between text-white sm:flex">
          <div className="w-full p-4">
            <div>
              <h1 className="font-semibold uppercase">Butik Zahrazhafira</h1>
              <div className="mt-4">
                <p className="text-sm">Whatsapp : +62 812-7497-100</p>
                <h1>
                  Tamarunang indah 2 blok d1 no 9, Paccinongang, Kec. Somba Opu,
                  Kabupaten Gowa
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-4 gap-y-4">
            <div>
              <h1 className="uppercase">Metoda Pembayaran</h1>
              <div className="flex gap-2 mt-2">
                <div className="w-12 overflow-hidden rounded-sm">
                  <Image
                    className="object-contain w-full h-full "
                    src="/icon/bca.png"
                    alt="image-product"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </div>
                <div className="w-12 overflow-hidden rounded-sm">
                  <Image
                    className="object-contain w-full h-full"
                    src="/icon/mandiri.png"
                    alt="image-product"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="uppercase">Metoda Pengiriman</h1>
              <div className="flex gap-2 mt-2">
                <div className="w-12 overflow-hidden rounded-sm">
                  <Image
                    className="object-cover w-full h-full"
                    src="/icon/idexpress.jpg"
                    alt="image-product"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </div>
                <div className="w-12 overflow-hidden rounded-sm">
                  <Image
                    className="object-cover w-full h-full"
                    src="/icon/jnt.jpg"
                    alt="image-product"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
