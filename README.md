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

## Snapshot(Anlık Görüntü) ve Obeservable ne zaman kullanılır
 - Snaphost  : rota parametresi değeri değişmezse ve yalnızca başlangıç ​​rota parametresi değerini okumak istiyorsanız
 - Obervable : rota parametresi değeri değişirse ve bu değişikliğe cevaben bazı kodları reaksiyona sokmak ve yürütmek istiyorsanız

