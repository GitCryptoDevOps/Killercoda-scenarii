FROM alpine

RUN apk update && \
    apk add --no-cache nikto perl-net-ssleay && \
    rm -f /tmp/* /etc/apk/cache/*

ENTRYPOINT ["nikto.pl"]

