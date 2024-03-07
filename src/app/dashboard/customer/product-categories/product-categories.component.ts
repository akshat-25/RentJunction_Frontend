import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.css',
})
export class ProductCategoriesComponent {
  productService: ProductService = inject(ProductService);
  router: Router = inject(Router);
  categories: any[] = [
    {
      name: 'Property',
      id: 1,
      image:
        'https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?t=st=1709481661~exp=1709485261~hmac=833bc9ed0c1f0e1e1fa044a65b29ebc3172957b3df413ba1a731a083afbae614&w=1060',
    },
    {
      name: 'Electronics',
      id: 2,
      image:
        'https://img.freepik.com/premium-photo/set-contemporary-house-appliances-standing-parquet-floor_613961-331.jpg?w=740',
    },
    {
      name: 'Computer Accessories',
      id: 3,
      image:
        'https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg?w=996',
    },
    {
      name: 'Audio Visual',
      id: 4,
      image:
        'https://img.freepik.com/free-vector/dj-workspace-illustration_1284-6466.jpg?t=st=1709482022~exp=1709485622~hmac=0dc223770ac14d74fa29032cd0e38b53c70d87783a3df69e056479c674c1b4ef&w=740',
    },
    {
      name: 'Security Systems',
      id: 5,
      image:
        'https://img.freepik.com/free-vector/security-system-composition-with-remote-fire-alarm-video-intercom-home-surveillance-system-isometric-icons_1284-27682.jpg?t=st=1709482112~exp=1709485712~hmac=1f67a3755d1a075a0b8f30acce955187e6c8ecb515be8a76596b891e7f038ead&w=740',
    },
    {
      name: 'Clothing and Jewellery',
      id: 6,
      image:
        'https://img.freepik.com/free-photo/gold-jewellery-table-with-other-gold-jewellery_1340-42836.jpg?t=st=1709482565~exp=1709486165~hmac=0996a21832eb2df333d35eb17ccaaf0a0801152e7d12ade88de409af40839872&w=996',
    },
    {
      name: 'Generators',
      id: 7,
      image:
        'https://img.freepik.com/premium-photo/3d-rendering-group-energy-storage-systems-battery-container-units-with-solar-panels_493806-17685.jpg?w=900',
    },
    {
      name: 'Media Entertainment Equipments',
      id: 8,
      image:
        'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?t=st=1709482285~exp=1709485885~hmac=481c9d69ebafd6285f5588cf5718034c1874b9761fe931c87d6fb57e79a89aad&w=740',
    },
    {
      name: 'Vehicles',
      id: 9,
      image:
        'https://img.freepik.com/free-vector/people-driving-modern-electric-transport_52683-41147.jpg?t=st=1709482345~exp=1709485945~hmac=e3656d5cc83e3562b1b982443edb6f9867054f55e23dfa0f0a6ad2a007a988ec&w=996',
    },
    {
      name: 'Furniture',
      id: 10,
      image:
        'https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?t=st=1709482525~exp=1709486125~hmac=0f00aac369986a6d605782834f7d69b8ee635e2cfff5337e7d5aa26f31b5ac75&w=996',
    },
    {
      name: 'HealthCare',
      id: 11,
      image:
        'https://img.freepik.com/free-photo/pills-medical-tools-arrangement-flat-lay_23-2149341610.jpg?t=st=1709482416~exp=1709486016~hmac=5719f6299d571f2a8986f29216398dbd7eb0566217eaac2c518a7bcf447c2998&w=996',
    },
    {
      name: 'Miscellaneous',
      id: 12,
      image:
        'https://as1.ftcdn.net/v2/jpg/05/01/42/62/1000_F_501426291_V38RI5PTpJWx10kBx2M27zFQ4L1M5rdn.jpg',
    },
  ];

  cities: any[] = [
    {
      name: 'Jaipur',
      id: 1,
      image:
        'https://www.insightvacations.com/wp-content/uploads/2023/02/hawa-mahal-jaipur3.jpg',
    },
    {
      name: 'Noida',
      id: 2,
      image:
        'https://www.shutterstock.com/image-photo/gautam-buddha-gate-noida-on-260nw-2387313081.jpg',
    },
    {
      name: 'Gurugram',
      id: 3,
      image:
        'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/06/01/Pictures/aerial-view-photo-gurugram-using-ht-drone_29ee0454-657c-11e8-b4a9-2154dcd09999.jpg',
    },
    {
      name: 'Delhi',
      id: 4,
      image:
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Mumbai',
      id: 5,
      image:
        'https://www.savaari.com/blog/wp-content/uploads/2021/12/1024px-Mumbai_Aug_2018_43397784544-1024x761.jpg',
    },
    {
      name: 'Ahmedabad',
      id: 6,
      image:
        'https://media.istockphoto.com/id/1322194536/photo/sabarmati-riverfront-aerial-view-ahmedabad.jpg?s=612x612&w=0&k=20&c=G8qSUp_FeJzB4Tq1vd02NGGSvUC-pI_PSb_z7ELdXAI=',
    },
  ]

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  type: string
  
  ngOnInit() {
    this.type =  this.activatedRoute.snapshot.paramMap.get('type');
    console.log(this.type);
  }


  onCategorySelect(id: number){
    console.log("in category select....")
    this.router.navigate([`/dashboard/customer/${this.type}/${id}`]);
  }

  onCitySelect(city: string){
    // this.productService.getProductByCity(city);
    this.router.navigate([`./${city}`],{relativeTo: this.activatedRoute});
  }

}
