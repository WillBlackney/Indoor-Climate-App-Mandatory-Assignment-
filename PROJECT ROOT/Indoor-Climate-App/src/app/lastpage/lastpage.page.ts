import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-lastpage',
  templateUrl: './lastpage.page.html',
  styleUrls: ['./lastpage.page.scss'],
})
export class LastpagePage implements OnInit {
  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};
  constructor (private qrScanner: QRScanner) { }

  ngOnInit() {
  }

  goToQrScan() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          this.isOn = true;


          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.isOn = false;

            this.QRSCANNED_DATA = text;
            if (this.QRSCANNED_DATA !== '') {
              this.closeScanner();
              scanSub.unsubscribe();
            }

          });
          this.qrScanner.show();

        } else if (status.denied) {
          console.log('camera permission denied');
          this.qrScanner.openSettings();
        } else {
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  closeScanner() {
    this.isOn = false;
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }

}


 

