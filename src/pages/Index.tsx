import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function StaffingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">КадрыБыстро</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">О нас</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#cases" className="text-slate-600 hover:text-slate-900 transition-colors">Кейсы</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex">
              Подобрать персонал
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Подбор от 24 часов</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Линейный персонал <span className="text-blue-600">в кратчайшие</span> сроки
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Подбираем грузчиков, кассиров, операторов, уборщиков и другой линейный персонал за 24–48 часов. Проверенные сотрудники — без рисков и лишних затрат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Оставить заявку
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Узнать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/09e88ee5-d29d-4712-b5a0-759502aa8429/files/ea7ec951-1fa4-4d18-bf24-199ff1f2f57e.jpg"
                alt="Линейный персонал"
                className="rounded-2xl shadow-xl w-full object-cover h-80"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Закрыто 5 000+ вакансий</p>
                  <p className="text-xs text-slate-500">за последний год</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold">24ч</p>
              <p className="text-blue-200 mt-1">Средний срок подбора</p>
            </div>
            <div>
              <p className="text-4xl font-bold">5 000+</p>
              <p className="text-blue-200 mt-1">Закрытых вакансий</p>
            </div>
            <div>
              <p className="text-4xl font-bold">300+</p>
              <p className="text-blue-200 mt-1">Компаний-клиентов</p>
            </div>
            <div>
              <p className="text-4xl font-bold">97%</p>
              <p className="text-blue-200 mt-1">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О нас</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Специализируемся на быстром подборе линейного персонала для бизнеса любого масштаба
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Закрываем позиции быстро и надёжно</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Более 7 лет мы помогаем ритейлу, складам, производствам и сервисным компаниям находить надёжный линейный персонал. Собственная база соискателей, проверка документов и гарантия замены — всё включено.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Кого подбираем</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Грузчики</Badge>
                    <Badge variant="secondary">Кассиры</Badge>
                    <Badge variant="secondary">Операторы</Badge>
                    <Badge variant="secondary">Уборщики</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Отрасли</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Ритейл</Badge>
                    <Badge variant="secondary">Склад</Badge>
                    <Badge variant="secondary">Производство</Badge>
                    <Badge variant="secondary">Сервис</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "ShieldCheck", color: "blue", title: "Проверка документов", desc: "Каждый сотрудник проходит верификацию" },
                { icon: "RefreshCw", color: "green", title: "Гарантия замены", desc: "Заменим в течение 24 часов" },
                { icon: "Clock", color: "purple", title: "Быстрый выход", desc: "Сотрудник на месте уже завтра" },
                { icon: "Headphones", color: "orange", title: "Поддержка 24/7", desc: "Менеджер всегда на связи" },
              ].map((item) => (
                <div key={item.title} className={`bg-${item.color}-50 rounded-xl p-4`}>
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3`}>
                    <Icon name={item.icon} fallback="CheckCircle" size={20} className={`text-${item.color}-600`} />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный спектр решений для закрытия потребности в линейном персонале
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="UserCheck" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Разовый подбор</CardTitle>
                <CardDescription>
                  Срочный подбор сотрудников под конкретную задачу или проект.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Подбор за 24–48 часов</li>
                  <li>✓ Проверка документов</li>
                  <li>✓ Гарантия замены 30 дней</li>
                  <li>✓ Закрытие от 1 позиции</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-green-600" />
                </div>
                <CardTitle>Массовый набор</CardTitle>
                <CardDescription>Быстрое закрытие больших объёмов — от 10 до 500+ человек.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Закрытие от 10 позиций</li>
                  <li>✓ Собственная база 50 000+</li>
                  <li>✓ Выход на объект от 48 часов</li>
                  <li>✓ Персональный менеджер</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-purple-600" />
                </div>
                <CardTitle>Аутстаффинг</CardTitle>
                <CardDescription>Сотрудники работают у вас, но оформлены у нас.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>✓ Снижение налоговой нагрузки</li>
                  <li>✓ Мы берём на себя кадровый учёт</li>
                  <li>✓ Гибкое масштабирование</li>
                  <li>✓ Полное юридическое сопровождение</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Кейсы клиентов</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Реальные задачи, которые мы решили для наших клиентов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-700" />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Сеть супермаркетов</CardTitle>
                    <CardDescription>
                      Открытие 3 новых магазинов — требовалось 120 сотрудников за 5 дней.
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Выполнено</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Кассиры</Badge>
                  <Badge variant="outline">Продавцы</Badge>
                  <Badge variant="outline">Охрана</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  <span>120 человек закрыто за 4 дня</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-green-500 to-green-700" />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Логистический склад</CardTitle>
                    <CardDescription>
                      Пиковый сезон — срочно нужны 80 грузчиков и операторов погрузчиков.
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Выполнено</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Грузчики</Badge>
                  <Badge variant="outline">Операторы</Badge>
                  <Badge variant="outline">Комплектовщики</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  <span>80 человек вышли на объект за 48 часов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Нужен персонал прямо сейчас?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Оставьте заявку — менеджер свяжется с вами в течение 15 минут и предложит готовых кандидатов.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Работаем 24/7 — даже в выходные и праздничные дни. Гарантируем оперативный отклик и индивидуальный подход к каждому клиенту.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-300">+7 (800) 000-00-00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">info@kadrybyistro.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-slate-300">@kadrybyistro</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Укажите, сколько человек нужно и в какие сроки — подберём кандидатов.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Компания</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="ООО Ромашка"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Что нужно?</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Например: 10 грузчиков на склад, выход завтра"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Отправить заявку
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400 text-center text-sm">
        <p>© 2024 КадрыБыстро. Подбор линейного персонала по всей России.</p>
      </footer>
    </div>
  )
}