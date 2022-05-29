import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'create-study-group',
    loadChildren: () => import('./create-study-group/create-study-group.module').then( m => m.CreateStudyGroupPageModule)
  },
  {
    path: 'post-job',
    loadChildren: () => import('./post-job/post-job.module').then( m => m.PostJobPageModule)
  },
  {
    path: 'post-service',
    loadChildren: () => import('./post-service/post-service.module').then( m => m.PostServicePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'quick-cash',
    loadChildren: () => import('./quick-cash/quick-cash.module').then( m => m.QuickCashPageModule)
  },
  {
    path: 'sup-with-you-today',
    loadChildren: () => import('./sup-with-you-today/sup-with-you-today.module').then( m => m.SupWithYouTodayPageModule)
  },
  {
    path: 'fresh-gist',
    loadChildren: () => import('./fresh-gist/fresh-gist.module').then( m => m.FreshGistPageModule)
  },
  {
    path: 'just-ask-a-celebrity',
    loadChildren: () => import('./just-ask-a-celebrity/just-ask-a-celebrity.module').then( m => m.JustAskACelebrityPageModule)
  },
  {
    path: 'lets-hangout',
    loadChildren: () => import('./lets-hangout/lets-hangout.module').then( m => m.LetsHangoutPageModule)
  },
  {
    path: 'cj-happenings',
    loadChildren: () => import('./cj-happenings/cj-happenings.module').then( m => m.CjHappeningsPageModule)
  },
  {
    path: 'news-letter',
    loadChildren: () => import('./news-letter/news-letter.module').then( m => m.NewsLetterPageModule)
  },
  {
    path: 'study-group',
    loadChildren: () => import('./study-group/study-group.module').then( m => m.StudyGroupPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'mission-statement',
    loadChildren: () => import('./mission-statement/mission-statement.module').then( m => m.MissionStatementPageModule)
  },
  {
    path: 'report-abuse',
    loadChildren: () => import('./report-abuse/report-abuse.module').then( m => m.ReportAbusePageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
