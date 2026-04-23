import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  //#region Fields

  public items: MenuItem[] = [];

  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Members 'On' :: OnInit

  public ngOnInit(): void {
    this.items = this.initBreadCrumb();
  }

  //#endregion

  //#region Members 'Init' :: initBreadCrumb()

  public initBreadCrumb(): MenuItem[] {
    return [
      { icon: PrimeIcons.HOME, routerLink: "/home" },
      { icon: PrimeIcons.QUESTION_CIRCLE, routerLink: "/about" }
    ]
  }

  //#endregion

  //#region Members 'Get' :: GetAbouts()

  public getAbouts(): MenuItem[] {
    return [
      this.createAboutManager(),
      this.createAboutApplication(),
      this.createAboutReport()
    ]
  }

  //#region Members 'CreateAbout' :: createAboutManager()

  private createAboutManager(): MenuItem {
    let about: MenuItem = {
      label: "Gerenciamento",
      tooltip: "A sessão de gerenciamento foi criada com a finalidade de possuir CRUDs - Create, Read, Update and Delete - básicos.",
      icon: PrimeIcons.PENCIL,
      items: [
        { label: "Lista", tooltip: "Uma listagem de registro de acordo com o seu domínio de negócio", icon: PrimeIcons.LIST },
        { label: "Formulários", tooltip: "Cada listagem possui seu formulário específico para criação ou atualização de registros", icon: PrimeIcons.FILE_EDIT }
      ]
    };

    return about;
  }

  private createAboutApplication(): MenuItem {
    let about: MenuItem = {
      label: "Aplicação",
      tooltip: "A sessão de aplicação - se preferir pode trocar para outro nome - é distinada a partes que o sistema não tem necessidade de CRUD. Por exemplo, um rastreio em tempo real.",
      icon: PrimeIcons.PENCIL,
      items: [
        { label: "Localização em Tempo Real", tooltip: "Apenas um exemplo para sessão de aplicação.", icon: PrimeIcons.MAP_MARKER },
        { label: "Provas ou Aulas", tooltip: "Apenas um exemplo para sessão de aplicação.", icon: PrimeIcons.PLAY_CIRCLE },
      ]
    };

    return about;
  }

  private createAboutReport(): MenuItem {
    let about: MenuItem = {
      label: "Relatório",
      tooltip: "A sessão de relatório é o lugar que você poderá gera-los conforme a necessidade do seu negócio da aplicação.",
      icon: PrimeIcons.FILE,
      items: [
        { label: "Tempo gasto em ...", tooltip: "Apenas um exemplo para sessão de relatórios.", icon: PrimeIcons.CLOCK },
        { label: "Relatório Geral de ...", tooltip: "Apenas um exemplo para sessão de relatórios.", icon: PrimeIcons.CHART_LINE },
      ]
    };

    return about;
  }

  //#endregion

}
