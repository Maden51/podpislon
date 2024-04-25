import ImageLayout from "../../components/image-layout";
import PageLayout from "../../components/page-layout";

function Footer(){
  const year = new Date().getFullYear();

  return(
    <ImageLayout pseudoClass="" bgColor="bg-dark-gray">
      <PageLayout>
        <div className="py-20 flex justify-between">
          <div>
            <div className="mb-6"><img src="../src/assets/images/logo-dark.svg" alt="лого подпислон" /></div>
            <ul className="flex gap-x-4">
              <li><a href="#" className=" w-7 h-7 bg-[#1E97DB] rounded-full flex items-center justify-center"><img src="../src/assets/images/vk-icon.svg" /></a></li>
              <li><a href="#" className=" w-7 h-7 bg-gradient-to-r from-[#B93826] from-0% to-100% to-[#5E26B9] rounded-full flex items-center justify-center"><img src="../src/assets/images/instagram-icon.svg" /></a></li>
              <li><a href="#" className=" w-7 h-7 bg-[#FF2507] rounded-full flex items-center justify-center"><img src="../src/assets/images/youtube-icon.svg" /></a></li>
            </ul>
            <div className="text-sm text-[#ACACAC] mt-7">©{year} Podpislon</div>
          </div>
          <div>
            <div className="text-white">
              <h3 className="text-orange">Отдел продаж</h3>
              <a href=":tel:781233333" className="hover:text-orange transition-colors">+7 812 333 33</a>
              <a href="mailto:sale!@podpisdoc.com" className="block hover:text-orange transition-colors" target="_blank">sale!@podpisdoc.ru</a>
              <h3 className="text-orange mt-5">Поддержка</h3>
              <a href="mailto:support@podpislon.com" target="_blank" className="hover:text-orange transition-colors">support@podpisdoc.ru</a>
            </div>
          </div>
          <div className="text-white">
            <h3 className="mb-7 font-sansBold text-lg">Документы</h3>
            <ul>
              <li className="mb-7 hover:text-orange transition-colors"><a href="#">Политика конфиденциальности</a></li>
              <li className="mb-7 hover:text-orange transition-colors"><a href="#">Лицензионный договор</a></li>
              <li className="mb-7 hover:text-orange transition-colors"><a href="#">Оферта</a></li>
              <li className="hover:text-orange transition-colors"><a href="#">Реквизиты</a></li>
            </ul>
          </div>
          <div className="text-white">
            <h3 className="mb-7 font-sansBold text-lg">О Сервисе</h3>
            <ul>
              <li className="mb-6 hover:text-orange transition-colors"><a href="#">Возможности</a></li>
              <li className="mb-6 hover:text-orange transition-colors"><a href="#">Цены</a></li>
              <li className="mb-6 hover:text-orange transition-colors"><a href="#">Поддержка</a></li>
              <li className="mb-6 hover:text-orange transition-colors"><a href="#">Для СМИ</a></li>
              <li className="hover:text-orange transition-colors"><a href="#">Контакты</a></li>
            </ul>
          </div>
        </div>
      </PageLayout>
    </ImageLayout>
  )
}

export default Footer;