import Image from "next/image";

export default function Home() {
  const courses = [
    {
      name: "A 코스",
      time: "60분",
      price: "2,500,000 VND",
      description:
        "샤워 및 마사지가 포함된 기본 이용 코스입니다.",
    },
    {
      name: "B 코스",
      time: "60분",
      price: "4,000,000 VND",
      description:
        "보다 여유롭게 이용할 수 있는 60분 코스입니다.",
    },
    {
      name: "C 코스",
      time: "80분",
      price: "4,200,000 VND",
      description:
        "여유로운 일정으로 이용할 수 있는 80분 추천 코스입니다.",
      best: true,
    },
    {
      name: "D 코스",
      time: "80분",
      price: "6,400,000 VND",
      description:
        "프리미엄 구성으로 이용할 수 있는 80분 코스입니다.",
    },
    {
      name: "E 코스",
      time: "70분",
      price: "2,800,000 VND",
      description:
        "샤워 및 마사지가 포함된 70분 이용 코스입니다.",
    },
    {
      name: "F 코스",
      time: "70분",
      price: "3,100,000 VND",
      description:
        "편안하게 이용할 수 있는 70분 코스입니다.",
    },
  ];

  const faqs = [
    {
      question: "영업시간은 어떻게 되나요?",
      answer:
        "오후 2시부터 운영하며 마지막 입장은 오후 11시입니다.",
    },
    {
      question: "예약은 어떻게 하나요?",
      answer:
        "카카오톡으로 방문 날짜, 시간, 인원과 원하는 코스를 보내주시면 예약 가능 여부를 안내해드립니다.",
    },
    {
      question: "코스별 상세 구성도 문의할 수 있나요?",
      answer:
        "네. 코스별 상세 구성이나 이용 관련 궁금한 사항은 카카오톡 예약 문의를 통해 편하게 문의해주세요.",
    },
    {
      question: "픽업 서비스도 가능한가요?",
      answer:
        "네. 픽업 서비스 이용이 가능합니다. 픽업 가능 지역과 시간은 예약 시 함께 문의해주세요.",
    },
    {
      question: "당일 예약도 가능한가요?",
      answer:
        "당일 예약도 가능하지만 현장 상황에 따라 이용 가능 시간이 달라질 수 있어 사전 예약을 권장합니다.",
    },
    {
      question: "한국어 문의가 가능한가요?",
      answer:
        "네. 한국어로 편하게 예약 및 이용 관련 문의가 가능합니다.",
    },
    {
      question: "위치는 어디인가요?",
      answer:
        "99 Chính Hữu, An Hải, Đà Nẵng 05000에 위치하고 있습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fff9f9] text-[#342728]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#efd3da] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <a
            href="#top"
            className="text-lg font-black tracking-tight sm:text-xl md:text-2xl"
          >
            <span className="text-[#a5233f]">DLG SAKURA</span>
          </a>

          <nav className="flex gap-3 text-xs font-bold text-gray-600 sm:gap-5 sm:text-sm">
            <a href="#about" className="hover:text-[#a5233f]">
              소개
            </a>

            <a href="#price" className="hover:text-[#a5233f]">
              가격
            </a>

            <a href="#gallery" className="hover:text-[#a5233f]">
              내부
            </a>

            <a href="#location" className="hover:text-[#a5233f]">
              위치
            </a>

            <a href="#faq" className="hover:text-[#a5233f]">
              FAQ
            </a>
          </nav>
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
            다낭 DLG 한인 사쿠라
            <span className="mt-2 block text-[#ffe4ea]">
              공식 홈페이지
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            코스별 이용시간과 가격, 영업시간, 위치 및 예약 정보를
            한곳에서 확인하세요.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#price"
              className="rounded-xl bg-white px-7 py-4 font-black text-[#a5233f]"
            >
              코스 가격 보기
            </a>

            <a
              href="https://open.kakao.com/o/sHYRJYQi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/60 bg-white/10 px-7 py-4 font-black text-white backdrop-blur"
            >
              카카오톡 예약
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">영업 시작</p>
              <p className="mt-1 font-black">오후 2시</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">라스트 입장</p>
              <p className="mt-1 font-black">오후 11시</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">상담</p>
              <p className="mt-1 font-black">한국어 가능</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-white/70">이동</p>
              <p className="mt-1 font-black">픽업 가능</p>
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
                다낭 DLG 한인 사쿠라
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                다낭 여행 중 편안하게 이용할 수 있도록 코스별 가격과
                이용 정보를 한눈에 확인할 수 있게 안내하고 있습니다.
                한국어 예약 상담이 가능하며 방문 전 예약을 권장합니다.
              </p>

              <div className="mt-7 space-y-3 rounded-2xl bg-[#fff1f4] p-5 text-sm font-semibold text-gray-700">
                <p>🕐 영업시간 : 오후 2시 ~ 라스트입장 오후 11시</p>
                <p>
                  📍 주소 : 99 Chính Hữu, An Hải, Đà Nẵng 05000
                </p>
                <p>💬 한국어 예약 및 문의 가능</p>
                <p>🚗 픽업 서비스 이용 가능</p>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#a5233f] to-[#701226] p-8 text-white shadow-xl">
              <p className="text-xs font-black tracking-[0.25em] text-white/70">
                RESERVATION GUIDE
              </p>

              <h3 className="mt-3 text-2xl font-black md:text-3xl">
                코스 상세 안내가 궁금하신가요?
              </h3>

              <p className="mt-4 leading-7 text-white/85">
                코스별 상세 구성이나 이용 방법은 예약 문의를 통해
                편하게 문의해주세요. 방문 날짜, 시간, 인원과 함께
                말씀해주시면 더욱 빠르게 안내해드립니다.
              </p>

              <a
                href="https://open.kakao.com/o/sHYRJYQi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-xl bg-[#FEE500] px-6 py-3 font-black text-[#191919]"
              >
                상세 코스 문의하기
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
                픽업 서비스 이용 가능
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                예약 시 현재 숙소 또는 픽업 희망 장소를 함께
                알려주세요. 픽업 가능 지역과 시간은 예약 상황에 따라
                안내해드립니다.
              </p>
            </div>

            <a
              href="https://open.kakao.com/o/sHYRJYQi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full rounded-xl bg-[#a5233f] px-6 py-4 text-center font-black text-white md:mt-0 md:w-auto"
            >
              픽업 문의
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
              코스 및 가격 안내
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              A~F 총 6개 코스로 운영됩니다.
              코스별 상세 구성은 예약 문의를 통해 편하게 문의해주세요.
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
                    BEST
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
                  href="https://open.kakao.com/o/sHYRJYQi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto rounded-xl bg-[#a5233f] px-5 py-3 text-center font-black text-white transition hover:bg-[#861b33]"
                >
                  상세 코스 문의
                </a>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-[#fff0f3] p-5 text-center">
            <p className="font-black text-[#a5233f]">
              코스별 상세 안내가 필요하신가요?
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              상세별 코스 구성과 이용 안내는 카카오톡 예약 문의를 통해
              편하게 문의해주세요.
            </p>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-gray-500">
            ※ 코스 구성 및 가격은 운영 상황에 따라 변경될 수 있으므로
            예약 전 최신 정보를 확인해주세요.
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
            사쿠라 내부 시설
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            다낭 DLG 한인 사쿠라의 실제 내부 공간을 확인해보세요.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5">
            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-1.jpg"
                alt="다낭 DLG 한인 사쿠라 내부 대기 공간"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-2.jpg"
                alt="다낭 DLG 한인 사쿠라 내부 공간"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-3.jpg"
                alt="다낭 DLG 한인 사쿠라 리셉션"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden rounded-2xl md:h-96">
              <Image
                src="/sakura-interior-4.jpg"
                alt="다낭 DLG 한인 사쿠라 관리 공간"
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
            찾아오시는 길
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
                <p className="text-xs text-gray-500">
                  영업시간
                </p>
                <p className="mt-1 font-black">
                  오후 2시 오픈
                </p>
              </div>

              <div className="rounded-xl bg-[#fff1f4] p-4">
                <p className="text-xs text-gray-500">
                  마지막 입장
                </p>
                <p className="mt-1 font-black">
                  오후 11시
                </p>
              </div>

              <div className="rounded-xl bg-[#fff1f4] p-4">
                <p className="text-xs text-gray-500">
                  픽업
                </p>
                <p className="mt-1 font-black">
                  예약 시 문의
                </p>
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
            자주 묻는 질문
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

      {/* RESERVATION */}
      <section id="reservation">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#7d1027] to-[#b82949] p-7 text-center text-white shadow-xl md:p-12">
            <p className="text-xs font-black tracking-[0.3em] text-white/70">
              RESERVATION
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              DLG 한인 사쿠라 예약 문의
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/85">
              방문 날짜, 시간, 인원과 원하는 코스를 알려주세요.
              코스별 상세 안내와 픽업 서비스도 함께 문의하실 수 있습니다.
            </p>

            <a
              href="https://open.kakao.com/o/sHYRJYQi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block w-full rounded-xl bg-[#FEE500] px-8 py-4 font-black text-[#191919] transition hover:scale-[1.02] sm:w-auto"
            >
              카카오톡 예약 문의
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#efd5db] bg-white py-8 text-center text-sm text-gray-400">
        © 2026 다낭 DLG 한인 사쿠라. All Rights Reserved.
      </footer>

      {/* FLOATING KAKAO */}
      <a
        href="https://open.kakao.com/o/sHYRJYQi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 예약 문의"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-3 font-black text-[#191919] shadow-xl transition hover:scale-105 md:bottom-7 md:right-7"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#191919] text-[10px] text-[#FEE500]">
          TALK
        </span>

        <span className="text-sm">예약 문의</span>
      </a>
    </main>
  );
}