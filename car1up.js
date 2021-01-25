function car1up() {
    if (car1_y > 0) {
        car_y = car_y - 10;
        upload_background();
        upload_c1();
        upload_c2();
    }
}
