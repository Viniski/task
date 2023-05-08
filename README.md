# Axence Frontend Recruitment Task

Przygotuj prostą stronę realizującą listowanie postów oraz ich dodawanie zgodnie z makietą w pliku "makieta.png".
W tym celu będzie również konieczne skorzystanie z API, którego namiary znajdują się poniżej.
API przy pierwszym requeście może potrzebować więcej czasu, żeby się rozbudzić, ale potem od razu zaczyna działać normalnie

Na realizację zadania masz 60 minut. Możesz skorzystać z dowolnych bibliotek (np. axios, react-hook-form, zod itp.), które uważasz za słuszne.
Część struktury projektu, dla Twojej wygody, (struktura HTML, podział na komponenty oraz pliki CSS modules) została już przygotowana, ale możesz ją dowolnie zmienić.
Aby uruchomić środowisko developerskie uruchom `npm install`, a następnie `npm run dev`. Wymagana minimalna wersja Node to 16

Postaraj się zrealizować całe zadanie i jednocześnie zadbać o jakość realizacji.
Będziemy oceniali uporządkowanie kodu, wykorzystane biblioteki, ukończenie zadania.

**Swoje rozwiązanie załącz jako nowy branch do tego repozytorium. Aby założyć nowy branch i wypchnąć zmiany:**

- sklonuj to repozytorium `git clone https://github.com/axence-recruitment/frontend_test.git`
- wprowadź swoje zmiany
- git add .
- git commit -m "imie i nazwisko kandydata"
- git push https://github.com/axence-recruitment/frontend_test.git master:attempt/[inicjały kandydata]

Jeżeli nie chcesz korzystać z Typescript, zmień rozszerzenia plików z .tsx na .jsx

## Posts REST API

```
api-url: https://axence-recruitment.azurewebsites.net
swagger-url: https://axence-recruitment.azurewebsites.net/swagger/index.html
```

### GET <api-url:port>/posts

- Response `200`

```
  [{
    "id":"4",
    "title": "Example title",
    "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    ...]
  ]
```

### POST <api-url:port>/posts

- Request Body
  ```
  {
    "title": "New title",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  }
  ```
- Headers
  ```
  Content-Type: application/json
  ```
- Response `200`
