function isPrime(n) {

    if (n < 2) {
        return false;
    }

    for (let div = 2; div <= Math.sqrt(n); div++) {

        if (n % div === 0) {
            return false;
        }

    }

    return true;
}
isPrime(5);