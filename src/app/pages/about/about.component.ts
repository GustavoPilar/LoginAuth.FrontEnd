import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Settings } from '../../core/settings';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  //#region Fields

  //#endregion

  //#region Constructor
  constructor() {
    Settings.breadCrumbItems = this.initBreadCrumb();
  }
  //#endregion

  //#region Members 'On' :: OnInit

  public ngOnInit(): void {

  }

  //#endregion

  //#region Members 'Init' :: initBreadCrumb()

  public initBreadCrumb(): MenuItem[] {
    return [
      { label: "Sobre o sistema", icon: PrimeIcons.QUESTION_CIRCLE, routerLink: "/about" }
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
      tooltip: "Crie, leia, atualize ou remova registro de dados do seu sistema!",
      icon: PrimeIcons.PENCIL,
      items: [
        { label: "Lista", tooltip: "Veja ou remova registros - ou parte deles - a partir de uma escolha entre as opções de gerenciamento", icon: PrimeIcons.LIST },
        { label: "Formulários", tooltip: "Crie ou atualize um registro específico conforme o seu querer", icon: PrimeIcons.FILE_EDIT }
      ]
    };

    return about;
  }

  private createAboutApplication(): MenuItem {
    let about: MenuItem = {
      label: "Sistema",
      tooltip: "Veja do que o sistema é capaz de oferecer à você!",
      icon: PrimeIcons.PENCIL,
      items: [
        { label: "Localização em Tempo Real", tooltip: "Exemplo do que o sistema pode oferecer.", icon: PrimeIcons.MAP_MARKER },
        { label: "Provas ou Aulas", tooltip: "Exemplo do que o sistema pode oferecer.", icon: PrimeIcons.PLAY_CIRCLE },
      ]
    };

    return about;
  }

  private createAboutReport(): MenuItem {
    let about: MenuItem = {
      label: "Relatório",
      tooltip: "Precisa saber sobre estatistícas? Aqui você encontra o que precisa.",
      icon: PrimeIcons.FILE,
      items: [
        { label: "Relatório Geral", tooltip: "Exemplo de relatório.", icon: PrimeIcons.CHART_LINE },
        { label: "Relatório Resumido", tooltip: "Exemplo de relatório.", icon: PrimeIcons.CHART_BAR },
        { label: "Tempo Gasto", tooltip: "Exemplo de relatório.", icon: PrimeIcons.CLOCK },
      ]
    };

    return about;
  }

  //#endregion

}
