# steps for setup 
- GitHub Desktop only supports commit signing if your Git client is configured to sign commits by default.
-  To sign all commits by default in any local repository on your computer, run git config --global commit.gpgsign true.
- GitHub supports several GPG key algorithms. If you try to add a key generated with an unsupported algorithm, you  may encounter an error.

    - RSA
    - ElGamal
    - DSA
    - ECDH
    - ECDSA
    - EdDSA

# Step 1
- install the GpG cmd tools
- open Git bash
- gpg --full-generate-key
- enter id information
- type a secure passphrase
- gpg --list-secret keys --keyid -format = long (Because, the public and the private key)