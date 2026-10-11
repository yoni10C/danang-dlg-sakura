import Image from "next/image";
import Link from "next/link";

export default function SakuraChinesePage() {
  const courses = [
    {
      name: "A 套餐",
      time: "60分钟",
      price: "2,500,000 VND",
      description: "包含淋浴及按摩的基础护理套餐。",
    },
    {
      name: "B 套餐",
      time: "60分钟",
      price: "4,000,000 VND",
      description: "适合希望更加从容体验的60分钟套餐。",
    },
    {
      name: "C 套餐",
      time: "80分钟",
      price: "4,200,000 VND",
      description: "更加充裕的80分钟推荐套餐。",
      best: true,
    },
    {
      name: "D 套餐",
      time: "80分钟",
      price: "6,400,000 VND",
      description: "可享受高级护理配置的80分钟套餐。",
    },
    {
      name: "E 套餐",
      time: "70分钟",
      price: "2,800,000 VND",
      description: "包含淋浴及按摩的70分钟护理套餐。",
    },
    {
      name: "F 套餐",
      time: "70分钟",
      price: "3,100,000 VND",
      description: "可轻松舒适体验的70分钟套餐。",
    },
  ];

  const faqs = [
    {
      question: "营业时间是什么时候？",
      answer: "每天下午2点开始营业，最晚入店时间为晚上11点。",
    },
    {
      question: "如何预约？",
      answer:
        "请通过微信发送到店日期、时间、人数以及希望使用的套餐，我们会为您确认预约情况。",
    },
    {
      question: "可以咨询各套餐的详细内容吗？",
      answer:
        "可以。套餐详细内容及使用方式可通过微信预约咨询，我们会为您详细说明。",
    },
    {
      question: "提供接送服务吗？",
      answer:
        "提供接送服务。可接送区域和时间请在预约时通过微信一起咨询。",
    },
    {
      question: "当天可以预约吗？",
      answer:
        "可以当天咨询，但可预约时间会根据现场情况有所不同，建议提前预约。",
    },
    {
      question: "可以用中文咨询吗？",
      answer:
        "可以。可通过微信进行预约及相关咨询。",
    },
    {
      question: "地址在哪里？",
      answer:
        "位于 99 Chính Hữu, An Hải, Đà Nẵng 05000。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fff9f9] text-[#342728]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#efd3da] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <Link
            href="/zh"
            className="text-lg font-black tracking-tight sm:text-xl md:text-2xl"
          >
            <span className="text-[#a5233f]">DLG SAKURA</span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden gap-5 text-sm font-bold text-gray-600 md:flex">
              <a href="#about" className="hover:text-[#a5233f]">
                关于
              </a>

              <a href="#price" className="hover:text-[#a5233f]">
                价格
              </a>

              <a href="#gallery" className="hover:text-[#a5233f]">
                环境
              </a>

              <a href="#location" className="hover:text-[#a5233f]">
                位置
              </a>

              <a href="#faq" className="hover:text-[#a5233f]">
                FAQ
              </a>
            </nav>

            <div className="flex items-center rounded-full border border-[#e9cad1] bg-[#fff2f4] p-1 text-xs font-black">
              <Link
                href="/"
                className="rounded-full px-3 py-2 text-gray-400 transition hover:text-[#a5233f]"
              >
                한국어
              </Link>

              <Link
                href="/zh"
                className="rounded-full bg-[#a5233f] px-3 py-2 text-white"
              >
                中文
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-[#6f081d] via-[#a5233f] to-[#d56b7f]"
      >
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#ffb7c5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center text-white md:px-6 md:py-28">
          <p className="text-xs font-black tracking-[0.35em] text-[#ffd9e1]">
            DANANG DLG KOREAN SAKURA
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            岘港 DLG 韩式 SAKURA
            <span className="mt-2 block text-[#ffe4ea]">
              官方网站
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            套餐价格、营业时间、位置、接送服务及微信预约信息，
            都可以在这里查看。
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#price"
              className="rounded-xl bg-white px-7 py-4 font-black text-[#a5233f]"
            >
              查看套餐价格
            </a>

            <a
              href="#reservation"
              className="rounded-xl border border-[#07C160]/70 bg-white/10 px-7 py-4 font-black text-[#07C160] backdrop-blur"
            >
              微信预约
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">开始营业</p>
              <p className="mt-1 font-black">下午 2 点</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">最晚入店</p>
              <p className="mt-1 font-black">晚上 11 点</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">咨询</p>
              <p className="mt-1 font-black">微信咨询</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">接送</p>
              <p className="mt-1 font-black">可安排接送</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.3em] text-[#a5233f]">
                ABOUT SAKURA
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                岘港 DLG 韩式 SAKURA
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                为了让游客能够更方便地了解服务，我们整理了各套餐价格、
                营业时间、位置及预约信息。建议到店前通过微信提前预约。
              </p>

              <div className="mt-7 space-y-3 rounded-2xl bg-[#fff1f4] p-5 text-sm font-semibold text-gray-700">
                <p>🕐 营业时间：下午2点 ～ 最晚入店晚上11点</p>
                <p>📍 地址：99 Chính Hữu, An Hải, Đà Nẵng 05000</p>
                <p>💬 微信预约及咨询</p>
                <p>🚗 可提供接送服务</p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#a5233f] to-[#701226] p-8 text-white shadow-xl">
              <p className="text-xs font-black tracking-[0.25em] text-white/70">
                RESERVATION GUIDE
              </p>

              <h3 className="mt-3 text-2xl font-black md:text-3xl">
                想了解套餐详细内容？
              </h3>

              <p className="mt-4 leading-7 text-white/85">
                各套餐的详细内容及使用方式可通过微信咨询。
                请发送到店日期、时间、人数及希望使用的套餐，
                我们会更快为您确认。
              </p>

              <a
                href="#reservation"
                className="mt-6 inline-block rounded-xl bg-[#07C160] px-6 py-3 font-black text-white"
              >
                微信咨询套餐
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PICKUP */}
      <section className="bg-[#fff0f3]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-6">
          <div className="rounded-3xl border border-[#ebccd4] bg-white p-7 shadow-sm md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-xs font-black tracking-[0.25em] text-[#a5233f]">
                PICK-UP SERVICE
              </p>

              <h2 className="mt-3 text-2xl font-black md:text-3xl">
                可提供接送服务
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                预约时请告诉我们当前酒店或希望接送的地点。
                可接送区域及时间会根据预约情况为您确认。
              </p>
            </div>

            <a
              href="#reservation"
              className="mt-6 inline-block w-full rounded-xl bg-[#a5233f] px-6 py-4 text-center font-black text-white md:mt-0 md:w-auto"
            >
              微信咨询接送
            </a>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="price">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.3em] text-[#a5233f]">
              COURSE & PRICE
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              套餐及价格
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              共提供 A～F 六种套餐。
              各套餐详细内容可通过微信咨询。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.name}
                className="relative flex h-full flex-col rounded-3xl border border-[#ebced5] bg-white p-6 shadow-sm"
              >
                {course.best && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#a5233f] px-3 py-1 text-xs font-black text-white">
                    推荐
                  </span>
                )}

                <p className="text-xs font-black tracking-[0.2em] text-[#a5233f]">
                  {course.time}
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  {course.name}
                </h3>

                <p className="mt-5 text-xl font-black text-[#a5233f]">
                  {course.price}
                </p>

                <p className="mt-4 min-h-[70px] text-sm leading-6 text-gray-500">
                  {course.description}
                </p>

                <a
                  href="#reservation"
                  className="mt-auto rounded-xl bg-[#07C160] px-5 py-3 text-center font-black text-white transition hover:bg-[#06ad56]"
                >
                  微信咨询套餐
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-[#fff0f3] p-5 text-center">
            <p className="font-black text-[#a5233f]">
              需要了解套餐详细内容？
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              详细套餐内容及使用说明请通过微信联系我们。
            </p>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-gray-500">
            ※ 套餐内容及价格可能会根据现场运营情况调整，
            预约前请确认最新信息。
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-[#fff0f3]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#a5233f]">
            GALLERY
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            SAKURA 店内环境
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            可通过照片提前了解岘港 DLG 韩式 SAKURA 的店内空间。
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5">
            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-1.jpg"
                alt="岘港 DLG SAKURA 店内等候区"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-2.jpg"
                alt="岘港 DLG SAKURA 店内空间"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-3.jpg"
                alt="岘港 DLG SAKURA 接待区"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-4.jpg"
                alt="岘港 DLG SAKURA 店内护理空间"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#a5233f]">
            LOCATION
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            地址及营业时间
          </h2>

          <div className="mt-8 rounded-3xl border border-[#efd4da] bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-bold text-gray-500">
              ADDRESS
            </p>

            <p className="mt-3 text-xl font-black leading-8">
              99 Chính Hữu, An Hải,
              <br className="sm:hidden" /> Đà Nẵng 05000
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-[#fff1f4] p-4">
                <p className="text-xs text-gray-500">营业时间</p>
                <p className="mt-1 font-black">下午2点</p>
              </div>

              <div className="rounded-xl bg-[#fff1f4] p-4">
                <p className="text-xs text-gray-500">最晚入店</p>
                <p className="mt-1 font-black">晚上11点</p>
              </div>

              <div className="rounded-xl bg-[#fff1f4] p-4">
                <p className="text-xs text-gray-500">接送</p>
                <p className="mt-1 font-black">预约时咨询</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#fff0f3]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <p className="text-xs font-black tracking-[0.3em] text-[#a5233f]">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            常见问题
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#efd5dc] bg-white p-5 md:p-6"
              >
                <h3 className="font-black text-[#a5233f]">
                  Q. {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WECHAT RESERVATION */}
      <section id="reservation">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#7d1027] to-[#b82949] p-7 text-center text-white shadow-xl md:p-12">
            <p className="text-xs font-black tracking-[0.3em] text-[#8ff0ae]">
              WECHAT RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              DLG 韩式 SAKURA 微信预约
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/85">
              请告诉我们到店日期、时间、人数和希望使用的套餐。
              套餐详细说明及接送服务也可以通过微信一起咨询。
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-3xl bg-white p-4 shadow-xl">
              <Image
                src="/wechat-qr.png"
                alt="岘港 DLG SAKURA 微信预约二维码"
                width={500}
                height={500}
                className="mx-auto h-auto w-full rounded-2xl"
              />
            </div>

            <p className="mt-6 text-xl font-black text-[#8ff0ae]">
              微信号：dananghyun
            </p>

            <p className="mt-3 text-sm leading-7 text-white/75">
              请扫描二维码添加微信，或搜索微信号 dananghyun 进行预约咨询。
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#efd5db] bg-white py-8 text-center text-sm text-gray-400">
        © 2026 岘港 DLG 韩式 SAKURA. All Rights Reserved.
      </footer>

      {/* FLOATING WECHAT */}
      <a
        href="#reservation"
        aria-label="微信预约咨询"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[#07C160] px-4 py-3 font-black text-white shadow-xl transition hover:scale-105 md:bottom-7 md:right-7"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[10px] text-[#07C160]">
          微信
        </span>

        <span className="text-sm">微信预约</span>
      </a>
    </main>
  );
}