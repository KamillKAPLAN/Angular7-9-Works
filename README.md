# FirstAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## ANGULAR SERVİCE

Bir servisin enjekte edilmiş bir bağımlılığı olup olmadığına bakılmaksızın, tutarlılık ve geleceğin kanıtı için açısal servis sınıfını @Injectable() dekoratörüyle her zaman dekore etmemek

Bir servisin bileşen seviyesinde kayıtlı olması durumunda servis yalnızca o bileşen için ve onun çocukları tarafından kullanılabilir.

Bir servis modül seviyesinde kaydedilmişse, bu servis uygulamadaki tüm bileşenler için kullanılabilir durumdadır.

Bir bileşeni bir hizmette kullanmak için onu bileşen sınıfı yapıcısına enjekte edin.

## INPUT

'INPUT' özelliği oluşturmak için özelliği '@Input' dekoratörüyle dekore edin.
'INPUT' özellikleri, genellikle üst öğeden alt öğeye veri iletmek için kullanılır.

## YAPILAN
nextEmployee() metodu yazıldı
ngOnChanges özelliği eklendi (display-employee.component.ts)

## Angular property setter vs ngOnChanges
Bir girdi özellik değeri değiştiğinde tespit etmek ve tepki vermek
  - ngOnChanges Yaşam Döngüsü Kancası
  - Mülkiyet Belirleyici

ngOnChanges
  - yalnızca tek bir mülkle ilgili değişiklikler yerine tüm değişiklikleri alırız
  - Birden fazla özellik değiştiğinde yararlı

Mülkiyet Belirleyici
  - Mülkiyet belirleyicisi, belirli bir mülke özgüdür, bu yüzden o mülkün özelliklerinde bir değişiklik yapmayız.
  - Tek bir mülkü takip etmek istediğinizde kullanışlıdır

## Component Communication (Bileşen İletişimi)
Input Property (Giriş özelliği) : Verileri PARENT'ten ÇOCUK Bileşenine aktarmak için
  - Alt öğede, @Input dekoratörüyle bir özellik yaratıyoruz
  - Daha sonra ana bileşen, ihtiyaç duyduğu verileri ileten alt bileşenin input özelliğine bağlanır

Output Property (Çıktı özelliği) : ÇOCUK'tan PARENT Bileşenine veri aktarmak için

## Angular Route Guards
    Route Guard(Bekçi, Korumak)				Kullanımı
 - Devre dışı bırakılabilir		: navigasyonu mevcut rotadan uzak tutun
 - Aktif edilebilir			: bir rotaya nöbet navigasyonu
 - Aktif çocuk olabilir			: çocuk rotasına navigasyon
 - Yüklenebilir				: senkronize olmayan bir özellik modülüne navigasyon navigasyon
 - Çözmek				: rota aktivasyonundan önce rota verilerini alma işlemini gerçekleştirme
	Rota Koruması kullanmak için üç adım
  - route guard(koruması) inşa et
  - korumayı açısal bağımlılık enjeksiyon sistemi ile kaydedin
  - korumayı bir rotaya bağlamak

## Snapshot(Anlık Görüntü) ve Observable ne zaman kullanılır
 - Snaphost  : rota parametresi değeri değişmezse ve yalnızca başlangıç ​​rota parametresi değerini okumak istiyorsanız
 - Obervable : rota parametresi değeri değişirse ve bu değişikliğe cevaben bazı kodları reaksiyona sokmak ve yürütmek istiyorsanız

## Required(gerekli, lazım) route parameters ve Optional(isteğe bağlı) route parameter arasındaki farklar
 - required(gerekli) route(rota) parametreleri, optional(isteğe bağlı) route(rota) parametreleri olmadığından rota yapılandırmasının bir parçasıdır.
 - Optional(isteğe bağlı) rota parametrelerinin olmadığı desen eşleşmesinde required(gerekli) rota parametreleri kullanılır.
 - isteğe bağlı rota parametreleri, varsa gerekli rota parametrelerinden sonra geçirilmelidir
 - değer basit ve zorunlu olduğunda gerekli bir rota parametresini tercih edin. Örneğin, belirli bir çalışan ayrıntılarını görüntülemek için, ID parametresi zorunludur ve basit bir tam sayıdır.
 - öte yandan, değer isteğe bağlı ve karmaşık olduğunda isteğe bağlı bir rota parametresini tercih edin

## Pipe'ın 2 türü vardır
 - Pure(Saf, Temiz) Pipe
     - sadece giriş değerinde saf bir değişiklik tespit edildiğinde gerçekleştirilir
     - saf değişiklik, ilkel bir giriş değerindeki (String, Number, Boolean) veya değiştirilen nesne referansındaki (Array, Date, Object) değişikliktir
     - hızlıdır
     - Pipe'ın girişi bir nesne ise ve yalnızca nesnenin özellik değerleri değişse de referans olmadığında pure pipe çalıştırılmaz.
 - Impure(Saf Olmayan, Kirli) Pipe
 -- PURE PIPE'lar hızlıdır, ancak kaynak veriler nesne referansında bir değişiklik yapılmadan güncellenirse filtreleme ve sıralama beklendiği gibi çalışmayabilir
 -- Verileri filtrelemek ve sıralamak için bir IMPURE PIPE kullanılması önerilmez. Çünkü kaynak veriler değişmese bile her değişiklikte işlenir
 -- Önerilen yaklaşım filtreleme ve sıralama kodunu bileşenin kendisine taşımaktır, böylece bu kodun ne zaman çalışması ve yürütmemesi gerektiği konusunda daha iyi kontrol sahibi olursunuz.

## Angular'da Sorgu string'i parametreleri
 - Sorgu parametreleri genellikle route(rota)daki parametrelerin isteğe bağlı olmasını istediğinizde ve bu parametreleri birden fazla route(rota)da tutmak istediğinizde kullanılır.
 - Tıpkı isteğe bağlı route(rota) parametreleri gibi, sorgu parametreleri de route(rota) yapılandırmasının bir parçası değildir ve bu nedenle route(rota) deseni eşleştirmesinde kullanılmaz
 - Preserve(korumak), Passing(geçen)

## Sorgu String Parametreleri Nasıl Okunur
 - Parametrelerin 3 Tipi Vardır
     - Required(Gerekli) Parameters
     - Optional(İsteğe bağşlı) Parameters
     - Query(Sorgu) Parameters

     - has(name)    : eğer parametre bulunursa 'true', bulunmazsa 'false' değerini döndürür.
     - get(name)    : eğer parametre mevcut ise değeri döndürür, değillse 'null'(boş) değer döndürür.
     - getAll(name) : eğer bulunursa parametre dizi string'i döndürür, bulunmazsa boş dizi döndürür.
     - keys         : tüm parametrelerin dizi string'ini döndürür.


