According to Gartner, 80% of an application's code is provided by dependencies. However, the vulnerabilities of these dependencies are rarely monitored.

OWASP's Dependency Check tool (https://www.owasp.org/index.php/OWASP_Dependency_Check) can automatically list and check whether an application dependency has a vulnerability. To do this, this tool uses the NIST National Vulnerability Database (NVD) website. This database publishes vulnerabilities in the form of CVEs (Common Vulnerabilities and Exposures). CVEs are associated with CPEs (Common Platform Enumeration), which correspond to a software.

Dependency Check supports several environments, which are listed on the https://jeremylong.github.io/DependencyCheck/analyzers/ page.

Even vulnerabilities not yet publicly disclosed can be included in this database. But in this case, it will not have a detailed description.
