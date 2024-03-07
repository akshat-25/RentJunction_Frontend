import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { DataViewLayoutOptions, DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ViewProductsComponent } from './owner/view-products/view-products.component';
import { AddProductComponent } from './owner/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UpdateProductComponent } from './owner/update-product/update-product.component';
import { ProductCategoriesComponent } from './customer/product-categories/product-categories.component';
import { CategoryComponent } from './customer/product-categories/category/category.component';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { InplaceModule } from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup'
import { ImageModule } from 'primeng/image';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpeedDialModule } from 'primeng/speeddial';
import { SpinnerModule } from 'primeng/spinner';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { AnimateModule } from 'primeng/animate';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { RentProductComponent } from './customer/rent-product/rent-product.component';
import { PaymentComponent } from './customer/rent-product/payment/payment.component';
import { CityComponent } from './customer/product-categories/city/city.component';
import { RentalsComponent } from './customer/rentals/rentals.component';
import { ExtendRentComponent } from './customer/rentals/extend-rent/extend-rent.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';

const routes: Routes = [
  {
    path: 'customer', children: [
      {path: 'rentals', component: RentalsComponent},
      {path: 'rentals/extend-rent/:id', component: ExtendRentComponent},
      {path: '', component: CustomerComponent},
      {path: 'extend-rent/:id/checkout', component: PaymentComponent},
      {path: 'rent/:id', children: [
        {path: '', component: RentProductComponent},
        {path: 'checkout', component: PaymentComponent}
      ]},
     
      {path: ':type', children: [
        {path: '', component: ProductCategoriesComponent},
        {path: ':id', component: CategoryComponent},
        {path: ':name', component: CategoryComponent}
      ]},
      
   
    ]
  },

  {path:'owner', children: [
    {path: '', component: OwnerComponent},
    {path: 'view-products', component: ViewProductsComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: 'update-product', component: UpdateProductComponent},
  ]},

  {path: 'admin', children: [
    {path: '', component: AdminComponent},
    {path: ':type', component: CustomerDetailsComponent},
  ]}
  
]

@NgModule({
  declarations: [
    CustomerComponent,
    OwnerComponent,
    ViewProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductCategoriesComponent,
    CategoryComponent,
    RentProductComponent,
    PaymentComponent,
    CityComponent,
    RentalsComponent,
    ExtendRentComponent,
    AdminComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    TreeModule,
    TreeSelectModule,
    ProgressSpinnerModule,
    TreeTableModule,
    ImageModule,
    RippleModule,
    AccordionModule,
    StyleClassModule,
    CommonModule,
    DropdownModule,
    CardModule,
    ToastModule,
    InputTextModule,
    TagModule,
    TableModule,
    FormsModule,
    RatingModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
    DataViewModule,
    RouterModule.forChild(routes)
  ],
  providers: [ConfirmationService,MessageService]
})
export class DashboardModule { }
