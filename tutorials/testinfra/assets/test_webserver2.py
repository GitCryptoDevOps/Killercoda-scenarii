def test_nginx_is_installed(host):
    assert host.package('nginx').is_installed

def test_nginx_is_running(host):
    assert host.service('nginx').is_running
