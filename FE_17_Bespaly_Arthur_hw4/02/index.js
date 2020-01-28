for (let check of a) {
    for (let aasd in check) {
        if (aasd != 'name' && aasd!= 'surname') {
            alert(check[aasd]);
        }
    }
}//