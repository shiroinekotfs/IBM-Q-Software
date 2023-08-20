from setuptools import setup, find_packages
import ibm_q_lab_server_extension

setup(
      name='ibm-q-lab-server-extension',
      version='4.0.28',
      description='Server handlers',
      author='IBM Research',
      author_email='info@ibm.com',
      license='BSD-3-Clause',
      classifiers=[
        'License :: OSI Approved :: MIT License',
        'Classifier: Programming Language :: Python',
        'Classifier: Programming Language :: Python :: 3',
        'Classifier: Programming Language :: Python :: 3.6',
        'Classifier: Programming Language :: Python :: 3.7',
        'Classifier: Programming Language :: Python :: 3.8',
        'Classifier: Programming Language :: Python :: 3.9',
        'Classifier: Framework :: Jupyter',
        'Operating System :: Unix',
        'Operating System :: MacOS',
        'Operating System :: POSIX :: Linux',
        'Operating System :: Microsoft :: Windows'
      ],
      url='https://github.ibm.com/IBM-Q-Software/ibmq-jupyterlab-extensions',
      packages=['ibm_q_lab_server_extension'],
      keywords=['Jupyter', 'JupyterLab', 'JupyterLab3'],
      include_package_data=True,
      install_requires=['jupyterlab==3.6.1', 'jupyter-server==2.7.2'],
      data_files=[
          ("share/jupyter/labextensions/@quantum/lab-server",
           [
            '@quantum-labserver/install.json',
            '@quantum-labserver/package.json'
           ]
          ),
          ("share/jupyter/labextensions/@quantum/lab-server/static",
           [
            '@quantum-labserver/static/138.cc3f2542e28369ae594d.js',
            '@quantum-labserver/static/688.09e8a1383c921569f1e2.js',
            '@quantum-labserver/static/remoteEntry.871a75001a3d57b3df97.js',
            '@quantum-labserver/static/style.js',
            '@quantum-labserver/static/third-party-licenses.json'
           ]
          ),
          ("etc/jupyter/jupyter_server_config.d",
           [
            'etc/ibm_q_lab_server_extension.json'
           ]
          )
      ]
)
