import { QuizState } from "./types"

export const quizInitialState: QuizState = {
  activeID: 1,
  quizes: [
    {
      id: 1,
      currentQuestionId: 1,
      title: "Тест по географии",
      description:
        "Геогра́фия — комплекс естественных и общественных наук, изучающих структуру, функционирование и эволюцию географической оболочки, взаимодействие и распределение в пространстве природных и природно-общественных геосистем и их компонентов",
      rightAttempt: 0,
      isFinished: false,

      questions: [
        {
          id: 1,
          text: "Столица Великобритании?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "Париж",
            },
            {
              id: 2,
              text: "Лондон",
            },
            {
              id: 3,
              text: "Москва",
            },
            {
              id: 4,
              text: "Токио",
            },
            {
              id: 5,
              text: "Торонто",
            },
          ],
        },
        {
          id: 2,
          text: "Столица Российской Федерации?",
          correctAnswerID: 3,

          answers: [
            {
              id: 1,
              text: "Санкт-Петербург",
            },
            {
              id: 2,
              text: "Торонто",
            },
            {
              id: 3,
              text: "Москва",
            },
            {
              id: 4,
              text: "Саратов",
            },
            {
              id: 5,
              text: "Анкара",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      currentQuestionId: 1,
      title: "Тест по истории РФ",
      description:
        "Исто́рия — наука, исследующая прошлое, реальные факты и закономерности смены исторических событий, эволюцию общества и отношений внутри него, обусловленных человеческой деятельностью на протяжении многих поколений. В наши дни появилось новое определение истории как науки «о прошлой социальной реальности»",
      rightAttempt: 0,
      isFinished: false,

      questions: [
        {
          id: 1,
          text: "В каком году началось сражение под Сталинградом?",
          correctAnswerID: 5,

          answers: [
            {
              id: 1,
              text: "в 1943",
            },
            {
              id: 2,
              text: "в 1945",
            },
            {
              id: 3,
              text: "в 1905",
            },
            {
              id: 4,
              text: "в 1917",
            },
            {
              id: 5,
              text: "в 1942",
            },
          ],
        },
        {
          id: 2,
          text: "В каком году началась Первая Мировая Война?",
          correctAnswerID: 4,

          answers: [
            {
              id: 1,
              text: "в 1812",
            },
            {
              id: 2,
              text: "в 1910",
            },
            {
              id: 3,
              text: "в 1905",
            },
            {
              id: 4,
              text: "в 1914",
            },
            {
              id: 5,
              text: "в 1939",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      currentQuestionId: 1,
      title: "Тест по брендам автомобилей",
      description:
        "Автомоби́ль — моторное безрельсовое дорожное и/или внедорожное, чаще всего автономное, транспортное средство, используемое для перевозки людей и/или грузов, имеющее от четырёх колёс. Основное назначение автомобиля заключается в совершении транспортной работы.",
      rightAttempt: 0,
      isFinished: false,

      questions: [
        {
          id: 1,
          text: "Какая страна производит автомобили SAAB?",
          correctAnswerID: 4,

          answers: [
            {
              id: 1,
              text: "Германия",
            },
            {
              id: 2,
              text: "Италия",
            },
            {
              id: 3,
              text: "США",
            },
            {
              id: 4,
              text: "Швеция",
            },
            {
              id: 5,
              text: "Франция",
            },
          ],
        },
        {
          id: 2,
          text: "Кто запатентовал первый автомобиль на бензиновом двигателе?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "Николас-Джозеф Кагнот",
            },
            {
              id: 2,
              text: "Фредрих Майкл Бенз",
            },
            {
              id: 3,
              text: "Иван Петрович Кулыбин",
            },
            {
              id: 4,
              text: "Генри Форд",
            },
            {
              id: 5,
              text: "Джен Джозеф Эттин Леноир",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      currentQuestionId: 1,
      title: "Тест по музыке",
      description:
        "Му́зыка — вид искусства, в котором определённым образом организованные звуки используются для создания некоторого сочетания формы, гармонии, мелодии, ритма или иного выразительного содержания",
      rightAttempt: 0,
      isFinished: false,

      questions: [
        {
          id: 1,
          text: "В каком году вышел альбом 'The Dark Side of the Moon' группы Pink Floyd?",
          correctAnswerID: 5,

          answers: [
            {
              id: 1,
              text: "1969",
            },
            {
              id: 2,
              text: "1970",
            },
            {
              id: 3,
              text: "1981",
            },
            {
              id: 4,
              text: "1975",
            },
            {
              id: 5,
              text: "1973",
            },
          ],
        },
        {
          id: 2,
          text: "Какая первая композиция альбома Enigma?",
          correctAnswerID: 2,

          answers: [
            {
              id: 1,
              text: "The Cross of Changes",
            },
            {
              id: 2,
              text: "MCMXC a.D.",
            },
            {
              id: 3,
              text: "Seven Lives Many Faces",
            },
            {
              id: 4,
              text: "The Fall Of a Rebel Angel",
            },
            {
              id: 5,
              text: "The Screen Behind the Mirror",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      currentQuestionId: 1,
      title: "Тест по изобразительному искусству",
      description:
        "Изобрази́тельное иску́сство или изобрази́тельные иску́сства — класс пространственных искусств, объединяющий живопись, скульптуру, графику, монументальное искусство и фотоискусство.",
      rightAttempt: 0,
      isFinished: false,

      questions: [
        {
          id: 1,
          text: "Кто нарисовал картину 'Девятый Вал' ?",
          correctAnswerID: 4,

          answers: [
            {
              id: 1,
              text: "Василий Суриков",
            },
            {
              id: 2,
              text: "Клауд Монет",
            },
            {
              id: 3,
              text: "Сандро Боттичелли",
            },
            {
              id: 4,
              text: "Иван Айвазовский",
            },
            {
              id: 5,
              text: "Сальвадор Дали",
            },
          ],
        },
        {
          id: 2,
          text: "Самая известная картина Малевича?",
          correctAnswerID: 1,

          answers: [
            {
              id: 1,
              text: "Черный квадрат",
            },
            {
              id: 2,
              text: "Черный круг",
            },
            {
              id: 3,
              text: "Последний суд",
            },
            {
              id: 4,
              text: "Бурлаки на Волге",
            },
            {
              id: 5,
              text: "Автопортрет Малевича",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      currentQuestionId: 1,
      title: "Тест о космосе",
      description:
        "Косми́ческое простра́нство, ко́смос — относительно пустые участки Вселенной, которые лежат вне границ атмосфер небесных тел.",
      rightAttempt: 0,
      isFinished: false,

      questions: [
        {
          id: 1,
          text: "Первый астронавт отправившийся в космос?",
          correctAnswerID: 2,

          answers: [
            {
              id: 5,
              text: "Билли Джин",
            },
            {
              id: 1,
              text: "Юрий Гагарин",
            },
            {
              id: 2,
              text: "Алексей Леонов",
            },
            {
              id: 3,
              text: "Валентина Терешкова",
            },
            {
              id: 4,
              text: "Сергей Королев",
            },
          ],
        },
        {
          id: 2,
          text: "Самая близкая планета к солнцу это ...",
          correctAnswerID: 5,

          answers: [
            {
              id: 1,
              text: "Плутон",
            },
            {
              id: 2,
              text: "Земля",
            },
            {
              id: 3,
              text: "Марс",
            },
            {
              id: 4,
              text: "Луна",
            },
            {
              id: 5,
              text: "Меркурий",
            },
          ],
        },
      ],
    },
  ],
}