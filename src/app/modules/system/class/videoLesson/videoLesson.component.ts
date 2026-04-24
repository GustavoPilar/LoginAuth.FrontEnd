import { AfterViewInit, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { VideoLesson } from "../../../../models/entities";
import { DomSanitizer } from "@angular/platform-browser";
import { Settings } from "../../../../core/settings";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: "app-video-lesson",
  standalone: false,
  templateUrl: './videoLesson.component.html'
})
export class VideoLessonComponent implements OnInit, AfterViewInit, OnDestroy {

  //#region Fields

  public videos: VideoLesson[] = []

  public sanitizer: DomSanitizer = inject(DomSanitizer);

  //#endregion

  //#region Constructor
  constructor(

  ) {
    Settings.breadCrumbItems = [
      { icon: PrimeIcons.DESKTOP, routerLink: "system/" },
      { label: "Video Aula", icon: PrimeIcons.PLAY_CIRCLE }
    ]
  }
  //#endregion

  //#region Members 'On' :: ngOnInit

  public ngOnInit(): void {
    this.videos = [
      {
        id: 0,
        name: "Música",
        description: "Vídeo com música calma",
        url: "",
        safeURL: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/BNhiW3r6zy4?si=VXylXqmSZabSyAbF")
      },
      {
        id: 1,
        name: "Música",
        description: "Vídeo com música calma",
        url: "",
        safeURL: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/BNhiW3r6zy4?si=VXylXqmSZabSyAbF")
      },
      {
        id: 2,
        name: "Música",
        description: "Vídeo com música calma",
        url: "",
        safeURL: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/BNhiW3r6zy4?si=VXylXqmSZabSyAbF")
      },
    ]
  }

  public ngAfterViewInit(): void {

  }

  public ngOnDestroy(): void {

  }

  //#endregion

}
