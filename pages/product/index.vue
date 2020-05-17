<template>
  <main class="product-page">
    <modals-container />
    <div class="product-page__container">
      <BreadCrumbs :data="breadCrumbsData" />
      <Product
        :configurations="[{ title: 'Объем памяти', option: 'checkbox', values: ['64Gb', '256Gb', '512Gb']}, { title: 'Цвет', option: 'checkbox', values: []}]"
        :features="[['Количество SIM-карт', '2'], ['Количество камер', '3'], ['Стандарт связи', 'GSM 900/1800/1900, 3G, 4G LTE, LTE-A, VoLTE'], ['Диагональ', '5.8']]"
        :foundOffers="3"
        :isInStock="true"
        :previewImages="['https://i-cdn.phonearena.com/images/articles/350327-thumb/Apple-iPhone-11-Pro-colors-000.jpg', 'https://i-cdn.phonearena.com/images/articles/350316-xgallery/Apple-iPhone-11-Pro-colors-01-space-gray.jpg', 'https://i-cdn.phonearena.com/images/articles/350317-image/Apple-iPhone-11-Pro-colors-02-silver.jpg', 'https://i-cdn.phonearena.com/images/articles/350318-image/Apple-iPhone-11-Pro-colors-03-midnight-green.jpg', 'https://i-cdn.phonearena.com/images/articles/350319-image/Apple-iPhone-11-Pro-colors-04-gold.jpg']"
        :priceRange="[16550, 18990]"
        :productData="productData"
        :vendorCode="125543"
        title="Смартфон Apple iPhone 11 Pro"
      />
      <Cards
        :rightMessage="$store.state.app.translation.trnsl_showmore"
        :data="dataCards"
        name="С этим товаром покупают"
      />
      <Cards
        :rightMessage="$store.state.app.translation.trnsl_showmore"
        :data="dataCards1"
        name="Аналогичные предложения"
      />
    </div>
    <!-- <modal name="hello-world">
      hello, world!
    </modal> -->
  </main>
</template>

<script>
import Cards from '~/components/Cards.vue'
import Product from '~/components/Product'
import 'vue-js-modal/dist/styles.css'
import BreadCrumbs from '~/components/BreadCrumbs.vue'

export default {
  components: {
    Cards,
    Product,
    BreadCrumbs
  },
  data () {
    return {
      breadCrumbsData: [],
      productData: {
        productRating: 4.6,
        ratingData: {
          star5: 18,
          star4: 3,
          star3: 0,
          star2: 1,
          star1: 1
        },
        tabs: [
          {
            amount: 3,
            name: 'vendor-offers',
            title: 'ПРЕДЛОЖЕНИЯ ПРОДАВЦОВ',
            data: [
              {
                product: {
                  price: 16550,
                  currency: 'руб.'
                },
                company: {
                  imageUrl: '',
                  name: 'Maximum',
                  rating: 4.0,
                  reviews: 589,
                  location: 'Кишинев',
                  shopUrl: '#'
                },
                delivery: {
                  type: 'Самовывоз',
                  duration: [3, 6],
                  cost: 120,
                  currency: 'руб.'
                }
              },
              {
                product: {
                  price: 16700,
                  currency: 'руб.'
                },
                company: {
                  name: 'Европа Плюс',
                  rating: 4.0,
                  reviews: 220,
                  location: 'Тирасполь',
                  shopUrl: '#'
                },
                delivery: {
                  type: 'Самовывоз',
                  duration: [2, 5],
                  cost: 15,
                  currency: 'руб.'
                }
              },
              {
                product: {
                  price: 16900,
                  currency: 'руб.'
                },
                company: {
                  name: 'Магнит',
                  rating: 4.0,
                  reviews: 127,
                  location: 'Бельцы',
                  shopUrl: '#'
                },
                delivery: {
                  type: 'Самовывоз',
                  duration: [8, 12],
                  cost: 75,
                  currency: 'руб.'
                }
              }
            ]
          },
          {
            name: 'features',
            title: 'ХАРАКТЕРИСТИКИ',
            data: [
              {
                title: 'Тип',
                features: [
                  ['Тип', 'игровой ноутбук'],
                  ['Операционная система', 'Windows 10 Home']
                ]
              },
              {
                title: 'Процессор',
                features: [
                  ['Процессор', 'Intel Core i5 8300H 2300 МГц'],
                  ['Ядро процессора', 'Coffee Lake-H4'],
                  ['Количество ядер процессора', '1 Мб'],
                  ['Объем кэша L2', '8 Мб'],
                  ['Объем кэша L3', '8 Мб']
                ]
              },
              {
                title: 'Изображение',
                features: [
                  ['Экран', '17.3 дюймов, 1920x1080, широкоформатный'],
                  ['Тип покрытия экрана', 'матовый'],
                  ['Тип матрицы экрана', 'TFT IPS'],
                  ['Подсветка экрана', 'светодиодная'],
                  ['Тип видеокарты', 'дискретная и встроенная NVIDIA GeForce GTX 1050 Ti 4096 МБ GDDR5']
                ]
              },
              {
                title: 'Связь',
                features: [
                  ['LAN/Modem', 'сетевая карта 1000 Мбит/c'],
                  ['Беспроводная связь', 'Wi-Fi IEEE 802.11ac, Bluetooth 5.0'],
                  ['Интерфейсы', 'USB 2.0x2, USB 3.0, USB 3.1 Type-C, USB 3.1 Type-C, HDMI, вход микр./вых. на наушники Combo, LAN (RJ-45), интерфейс USB 3.1 Gen 1 Type-C']
                ]
              }
            ]
          },
          {
            name: 'description',
            title: 'ОПИСАНИЕ',
            data: [
              {
                title: '',
                paragraphs: ['ASUS TUF Gaming FX705 изменяет представления о типичных игровых ноутбуках, предлагая мощную аппаратную конфигурацию в компактном корпусе с агрессивным дизайном и повышенной прочностью. Данная модель наделена оптимизированной под игры клавиатурой с полноцветной подсветкой, выделенной комбинацией WASD и ускоренным срабатыванием клавиш (технология Overstroke). IPS-дисплей NanoEdge обладает сверхтонкой рамкой, а прочность всего устройства подтверждена строгими тестами по стандарту MIL-STD-810G. TUF Gaming FX705 – отличная игровая платформа по разумной цене!']
              },
              {
                title: 'Сверхтонкая экранная рамка',
                paragraphs: ['Дисплей NanoEdge становится все изящнее. Теперь толщина его рамки составляет всего 7,18 мм*, что позволило сделать корпус ноутбука еще более компактным. В модели TUF Gaming FX705 используется IPS-панель с высокой частотой обновления (144 Гц), которая гарантирует плавное отображение динамичных сцен в играх с минимальным эффектом смазывания картинки. Широкий цветовой охват (100% sRGB) и большие углы обзора обеспечат точное воспроизведение всех оттенков даже при взгляде на экран со стороны.']
              },
              {
                title: 'Безупречная надежность',
                paragraphs: ['Как и все устройства серии TUF, ноутбук TUF Gaming FX705 отличается максимальной надежностью и стабильностью работы. Он прошел строгие тесты качества, в том числе по американскому военно-промышленному стандарту MIL-STD-810G, поэтому геймеры гарантированно получают в свое распоряжение только самое лучшее. Такое устройство без труда выдержит все тяготы не слишком бережного повседневного обращения.']
              },
              {
                title: 'Геймерский стиль',
                paragraphs: ['Ноутбук TUF Gaming FX705 доступен в двух вариантах оформления корпуса, каждый из которых выражает идею мощи и безупречной надежности. Крышка дисплея изготавливается из алюминия металлически-серого цвета или черного пластика. Ячеистая структура нижней панели придает корпусу дополнительную структурную прочность.']
              },
              {
                title: 'Оптимизированная раскладка и полноцветная подсветка',
                paragraphs: ['Выделенная комбинация WASD, широкая клавиша пробела, изолированные «стрелки», промежутки между группами функциональных клавиш – клавиатура ноутбука TUF Gaming FX705 специально оптимизирована под игры. Технология Overstroke обеспечивает ускоренное срабатывание клавиш, что будет особенно полезным для быстрого управления в динамичных компьютерных играх. Кроме того, в ней реализована подсветка, которой можно управлять через приложение TUF Aura Core.']
              }
            ]
          },
          {
            name: 'product-reviews',
            title: 'ОТЗЫВЫ О ТОВАРЕ',
            amount: 23,
            data: [
              {
                author: 'Даниил',
                postPeriod: 'сегодня',
                withPalermo: true,
                rating: 4.0,
                review: {
                  advantages: 'Хороший бизнес-ноутбук, приличный дизайн и вес, 4х ядрненный процессор нового поколения, приличный экран, широкие возможности апгрейда, 2 слота под память DDR4, разъем M2 для SSD, место для 2,5 SATA диска. Брал самую простую версию с убунтой, для бизнеса это лучше, чем домашняя винда, потому что все равно приходится ставить проф версию. Зато на эти деньги можно докупить нужное железо.',
                  disadvantages: 'пока не обнаружил',
                  comment: 'Не понимаю чем так не угодил экран ноутбука в предыдущем отзыве, вполне приличный экран, углы обзора может быть не самые лучшие, но они лучше чем в дешевых TN матрицах. Контрастность тоже хорошая. Для офисной работы и интернета больше и не надо. Кнопка включения утоплена слегка, большим пальцем нажимается без проблем, все удобно. Отпечаток, в дорогой комплектации - пожалуйста.'
                }
              },
              {
                author: 'Дмитрий',
                postPeriod: 'вчера',
                withPalermo: false,
                rating: 5.0,
                review: {}
              },
              {
                author: 'Катерина',
                postPeriod: '3 дня назад',
                withPalermo: true,
                rating: 4.0,
                review: {
                  advantages: 'Экран он огромный в хорошем смысле слова,oled дисплей это нечто',
                  disadvantages: 'пока не обнаружил',
                  comment: 'Перешел на него с iphone 6s plus , поэтому в плане размера он хорош,хотя многим может показаться дисплей слишком большим и работа одной рукой с телефоном будет затруднительна'
                },
                commentaries: [
                  {
                    author: 'Олег',
                    postPeriod: '3 недели назад',
                    content: 'Экран он огромный в хорошем смысле слова,oled дисплей это нечто'
                  },
                  {
                    author: 'Дмитрий',
                    postPeriod: '6 месяцев назад',
                    content: 'нет возможности найти фильтр-картридж от слова совсем. Был бы Вам очень признателен если бы Вы, как представитель компании, рассказали, где можно найти фильтр на эту модель в городе Киеве или хотя бы заказать'
                  },
                  {
                    author: 'Олег',
                    postPeriod: '3 августа 2018',
                    content: 'Экран он огромный в хорошем смысле слова,oled дисплей это нечто'
                  }
                ]
              }
            ]
          }
        ]
      },
      dataCards: [
        {
          src: 'https://i.imgur.com/VJSbrRk.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Наушники Apple AirPods Pro'
        },
        {
          src: 'https://i.imgur.com/zjBM3eB.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Чехол Apple силиконовый для Apple iPhone 11 Pro Max'
        },
        {
          src: 'https://i.imgur.com/nh4q8eY.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Беспроводная сетевая зарядка Belkin BOOST UP Qi'
        },
        {
          src: 'https://i.imgur.com/2LYw5M8.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Наушники Beats Solo Pro'
        },
        {
          src: 'https://i.imgur.com/3XwS68W.jpg',
          price: 16550,
          currency: 'руб',
          title: 'Наушники AirPods с беспроводным футляром'
        },
        {
          src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 2999,
          currency: 'руб',
          title: 'MacBook Pro Retina Dispay'
        },
        {
          src: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 1499,
          currency: 'руб',
          title: 'iPad'
        },
        {
          src: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1880&q=80',
          price: 999,
          currency: 'руб',
          title: 'iPhone X 64Gb'
        },
        {
          src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 599,
          currency: 'руб',
          title: 'Apple Watch'
        },
        {
          src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          price: 299,
          currency: 'руб',
          title: 'Air Pods'
        },
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        }
      ],
      dataCards1: [
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        },
        {
          src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 2999,
          currency: 'руб',
          title: 'MacBook Pro Retina Dispay'
        },
        {
          src: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 1499,
          currency: 'руб',
          title: 'iPad'
        },
        {
          src: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1880&q=80',
          price: 999,
          currency: 'руб',
          title: 'iPhone X 64Gb'
        },
        {
          src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 599,
          currency: 'руб',
          title: 'Apple Watch'
        },
        {
          src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          price: 299,
          currency: 'руб',
          title: 'Air Pods'
        },
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        },
        {
          src: 'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 2999,
          currency: 'руб',
          title: 'MacBook Pro Retina Dispay'
        },
        {
          src: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          price: 1499,
          currency: 'руб',
          title: 'iPad'
        },
        {
          src: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1880&q=80',
          price: 999,
          currency: 'руб',
          title: 'iPhone X 64Gb'
        },
        {
          src: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          price: 599,
          currency: 'руб',
          title: 'Apple Watch'
        },
        {
          src: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          price: 299,
          currency: 'руб',
          title: 'Air Pods'
        },
        {
          src: 'https://i.imgur.com/rfdCn2o.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 11'
        },
        {
          src: 'https://i.imgur.com/WQ2dZw6.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone Xr'
        },
        {
          src: 'https://i.imgur.com/qoj2AsJ.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 8'
        },
        {
          src: 'https://i.imgur.com/ktu1vXX.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 6'
        },
        {
          src: 'https://i.imgur.com/NiY51fW.png',
          price: 16550,
          currency: 'руб',
          title: 'Смартфон Apple iPhone 5S'
        }
      ]
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world')
    }
  }
}
</script>

<style scoped>
  .product-page {
    background-color: #F6F8F9;
    padding: 20px 0 150px;
    width: 100%;
  }
  .product-page__container {
    margin: 0 auto;
    width: 1260px;
  }
</style>
