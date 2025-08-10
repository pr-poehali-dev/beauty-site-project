import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const eyeshadowPalettes = [
    {
      id: 1,
      name: "СИЯНИЕ",
      subtitle: "тени для век",
      colors: ["#F4A8CD", "#E6739F", "#C65D7B", "#8B4B6B", "#5D2A42", "#3D1A2B"],
      price: "2 990 ₽",
      image: "/img/09d6c1a4-461c-4acc-aa2f-8392d54bb1eb.jpg"
    },
    {
      id: 2,
      name: "РОЗОВЫЕ МЕЧТЫ",
      subtitle: "палитра теней", 
      colors: ["#FFB6C1", "#FF91A4", "#FF6B88", "#E5516B", "#C73650", "#8B2538"],
      price: "3 490 ₽",
      image: "/img/09d6c1a4-461c-4acc-aa2f-8392d54bb1eb.jpg"
    },
    {
      id: 3,
      name: "НЮДОВАЯ КЛАССИКА",
      subtitle: "натуральные оттенки",
      colors: ["#F5E6D3", "#E8C4A0", "#D4A574", "#B8956A", "#8B7355", "#6B5B47"],
      price: "2 790 ₽",
      image: "/img/09d6c1a4-461c-4acc-aa2f-8392d54bb1eb.jpg"
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Дневной макияж глаз",
      duration: "8 мин",
      difficulty: "Начинающий",
      steps: 4
    },
    {
      id: 2,
      title: "Вечерний смоки айс",
      duration: "15 мин",
      difficulty: "Продвинутый", 
      steps: 7
    },
    {
      id: 3,
      title: "Свадебный макияж",
      duration: "20 мин",
      difficulty: "Эксперт",
      steps: 8
    }
  ];

  const instructions = [
    {
      step: 1,
      title: "Подготовка",
      description: "Очистите кожу век и нанесите праймер для теней"
    },
    {
      step: 2, 
      title: "Базовый цвет",
      description: "Нанесите светлый оттенок на всё подвижное веко"
    },
    {
      step: 3,
      title: "Глубина",
      description: "Добавьте более тёмный цвет во внешний уголок глаза"
    },
    {
      step: 4,
      title: "Растушевка",
      description: "Аккуратно растушуйте границы между оттенками"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">К</span>
                </div>
                <div>
                  <h1 className="brand-title text-3xl text-primary leading-none">КРАСОТКА</h1>
                  <span className="text-sm text-muted-foreground">косметическая фирма</span>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Главная', 'Каталог', 'Тени', 'Инструкции', 'О бренде', 'Контакты'].map((item) => (
                <a key={item} href="#" className="text-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingBag" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-rose-100/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="star-decoration inline-block mb-6">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-2xl">✨</span>
                  </div>
                  <h1 className="brand-title text-6xl lg:text-7xl text-primary">
                    СИЯНИЕ
                  </h1>
                </div>
              </div>
              <p className="text-2xl lg:text-3xl text-foreground/80 mb-2">тени для век</p>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
                Откройте магию идеального макияжа с нашими премиальными палитрами теней
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Palette" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Видео-уроки
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e0f15f91-f6c8-4c99-bf78-3c1b0afbd903.jpg" 
                alt="Красивая девушка с макияжем" 
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 text-6xl text-primary/20">
                ✦
              </div>
              <div className="absolute -bottom-4 -left-4 text-4xl text-primary/30">
                ✦
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Каталог теней</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая палитра создана для воплощения ваших самых смелых идей в макияже
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyeshadowPalettes.map((palette) => (
              <Card key={palette.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={palette.image} 
                    alt={palette.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Новинка
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{palette.name}</h3>
                    <p className="text-muted-foreground">{palette.subtitle}</p>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-2">
                      {palette.colors.map((color, index) => (
                        <div 
                          key={index} 
                          className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-4">{palette.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Добавить в корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Видео-уроки и инструкции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изучите профессиональные техники макияжа с нашими пошаговыми руководствами
            </p>
          </div>

          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="videos">Видео-уроки</TabsTrigger>
              <TabsTrigger value="instructions">Инструкции</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="mt-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((tutorial) => (
                  <Card key={tutorial.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <div className="relative bg-gradient-to-br from-primary/10 to-primary/20 h-48 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Play" size={24} className="text-white ml-1" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{tutorial.duration}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>{tutorial.difficulty}</span>
                        <span>{tutorial.steps} шагов</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        Смотреть урок
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="instructions" className="mt-12">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-center mb-8">Как правильно наносить тени</h3>
                    <div className="space-y-6">
                      {instructions.map((instruction) => (
                        <div key={instruction.step} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            {instruction.step}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">{instruction.title}</h4>
                            <p className="text-muted-foreground">{instruction.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Brand */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">О бренде КРАСОТКА</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы создаём косметику, которая подчёркивает естественную красоту каждой женщины. 
                Наши тени для век разработаны с использованием премиальных пигментов и инновационных формул.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">оттенков теней</div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Heart" size={18} className="mr-2" />
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-4">
                  {eyeshadowPalettes[0].colors.map((color, index) => (
                    <div key={index} className="aspect-square rounded-full" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">К</span>
                </div>
                <h3 className="brand-title text-2xl text-primary">КРАСОТКА</h3>
              </div>
              <p className="text-gray-300 mb-4">Косметика для создания идеального образа</p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-gray-300 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Тени для век</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Палитры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Акции</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@krasotka.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Красоты, 12</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 КРАСОТКА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;