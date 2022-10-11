def test_nginx_is_installed(host):
    assert host.package('nginx').is_installed
